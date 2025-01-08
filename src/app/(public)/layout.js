// RootLayout.jsx
import { Manrope, Poppins } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Public web components/(Home page)/Navbar";
import Footer from "@/components/Public web components/(Home page)/Footer";
import { PopupProvider } from "@/components/Public web components/context/PopupProvider";
import GlobalNewsletterPopup from "@/components/Public web components/context/GlobalNewsletterPopup";
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
  title: {
    default: "MedGames",
    template: "%s | MedGames",
  },
  description: "Medgames - Your favorite e-learning platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${manrope.variable} font-poppins antialiased`}
      >
        <PopupProvider>
          {/* Navbar */}
          <div className="fixed top-0 left-0 right-0 z-50 overflow-hidden">
            <Navbar />
          </div>
          <SpeedInsights />
          {/* Main content with padding to account for the fixed navbar */}
          <main className="pt-20">{children}</main>
          <GlobalNewsletterPopup />
          <Footer />
        </PopupProvider>
      </body>
    </html>
  );
}
