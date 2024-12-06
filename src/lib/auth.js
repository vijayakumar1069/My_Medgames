import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { connectDB } from "./dbconnection";
import { Admin } from "@/modals/admin";
import bcryptjs from "bcryptjs";
import { authConfig } from "./auth.config";


export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      authorize: async (credentials) => {
        await connectDB();
     
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required")
        }

    
        try {
          // Find admin by email
          const user = await Admin
            .findOne({ email: credentials.email })
            .select("+password");

          if (!user) {
            throw new Error("Admin not found. Please check your email.");
          }

          // Check if the password is valid
          const isPasswordValid = await bcryptjs.compare(
            credentials.password,
            user.password
          );

          if (!isPasswordValid) {
            throw new Error("Invalid password. Please try again.");
          }
       
          // Return user details for the session
          return {
            _id: user._id,
            email: user.email,
            role:user.role
          };
        } catch (error) {
         
          throw new Error(error.message);
        }
      },
    }),
  ],
  pages: {
    signIn: "/admin-login",
 
   
    error: "/admin-login/error-page" // Specify a custom error page
 
  },
  callbacks: {
    signIn: async ({ user, account }) => {
      if (account?.provider === "credentials") {
        return true; // Allow sign-in for admin
      }
      return false; // Deny sign-in for other providers
    },
    async session({ session, token }) {
      session.user.id = token.sub;
      session.user.role = token.role;
      session.user.email = token.email;

      return session;
    },
    async jwt({ token, user }) {
      if (user) {
      
        token.sub = user._id;
        token.email = user.email;
        token.role = user.role;     
      }
      return token;
    },
  },
  cookies: {
    pkceCodeVerifier: {
      name: "authjs.pkce.code_verifier",
      options: {
        httpOnly: true,
        sameSite: "none",
        path: "/",
        secure: true,
      },
    },
  },
  secret: process.env.AUTH_SECRET,
});