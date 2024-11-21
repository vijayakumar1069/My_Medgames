// RootLayout.jsx
import { Manrope, Poppins } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Public web components/(Home page)/Navbar";
import Footer from "@/components/Public web components/(Home page)/Footer";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${manrope.variable} font-poppins antialiased`}
      >
        {/* Navbar */}
        <Navbar />

        {/* Main content with padding to account for the fixed navbar */}
        <main className="pt-20"> {/* Adjust pt-20 based on navbar height */}
          {children}
        </main>
        {/* <Footer/> */}
      </body>
    </html>
  );
}
