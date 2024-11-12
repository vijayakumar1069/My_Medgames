import {Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Public web components/Navbar";

const poppins=Poppins({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: "--font-poppins",
})

export const metadata = {
  title: "MedGames",
  description: "Medgames - Your favorite e-learning platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-poppins antialiased`}
      >
        <section>
          <nav>
            <Navbar/>
          </nav>
        {children}
        </section>
      </body>
    </html>
  );
}
