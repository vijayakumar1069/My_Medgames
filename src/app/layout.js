import {Manrope, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Public web components/Navbar";

const poppins=Poppins({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: "--font-poppins",
})
const manrope=Manrope({
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: "--font-manrope",
})

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
        <section>
          <nav className="fixed top-0 left-0 right-0 z-50 overflow-hidden">
            <Navbar/>
          </nav>
        {children}
        </section>
      </body>
    </html>
  );
}
