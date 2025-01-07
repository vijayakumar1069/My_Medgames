// RootLayout.jsx
import { Manrope, Poppins } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Public web components/(Home page)/Navbar";
import Footer from "@/components/Public web components/(Home page)/Footer";
import { requireAuth } from "../actions/sessionFun";
import { redirect } from "next/navigation";
import Admin_Navbar from "@/components/Admin components/Admin_Navbar";
import Sidebar from "@/components/Admin components/Sidebar";
import { Suspense } from "react";
import Loading from "@/components/Admin components/Loading";
import { Toaster } from "@/components/ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "MedGames",
  description: "Medgames - Your favorite e-learning platform.",
};

export default async function Admin_Dashboard_layout({ children }) {
  const session = await requireAuth();

  try {
    return (
      <html lang="en">
        <body
          className={`${poppins.variable} ${manrope.variable} bg-brand-50 font-poppins antialiased`}
        >
          <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <div className="flex-1 flex flex-col">
              <Admin_Navbar />
              <main className="flex-1 overflow-y-auto p-6 bg-brand-50">
                <Suspense fallback={<Loading />}>
                  {children} <Toaster />
                </Suspense>
              </main>
              <SpeedInsights />
            </div>
          </div>
        </body>
      </html>
    );
  } catch (error) {
    redirect("/admin-login");
  }
}
