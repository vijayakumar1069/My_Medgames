// RootLayout.jsx
import { Manrope, Poppins } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Public web components/(Home page)/Navbar";
import Footer from "@/components/Public web components/(Home page)/Footer";
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

export default function Admin_Layout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${manrope.variable} font-poppins antialiased`}
      >
        {/* Navbar
        <div className="fixed top-0 left-0 right-0 z-50 overflow-hidden">

        <Navbar />
        </div> */}

        {/* Main content with padding to account for the fixed navbar */}
        <main>
          {children}
          <SpeedInsights />
        </main>
        {/* <Footer/> */}
      </body>
    </html>
  );
}
