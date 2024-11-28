// actions/auth.ts
"use server";

import { signIn, signOut } from "@/lib/auth";
import { connectDB } from "@/lib/dbconnection";
import { Admin } from "@/modals/admin";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

export async function loginAction({ email, password }) {

  try {
    await connectDB();

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return { error: "Invalid credentials" };
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);

    if (!isPasswordValid) {
      return { error: "Invalid credentials" };
    }
    const signInResult = await signIn("credentials", {
      email,
      password,
      callbackUrl: "/admin-dashboard",
      redirect: false,
    });


    if (signInResult?.error) {
      setError("Invalid credentials");
      return;
    }

    return { success: true };
  } catch (error) {
    return { error: "Thank you " };
  }
}
export async function logoutAction() {
  await signOut({ 
    callbackUrl: '/admin-login',
    redirect:true, 
  })
  redirect("/admin-login");
}