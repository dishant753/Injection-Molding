import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prem Industries | Injection Moulding",
  description:
    "Prem Industries delivers precision injection moulding, tooling, and assembly for high-volume production.",
  openGraph: {
    title: "Prem Industries | Injection Moulding",
    description:
      "Precision injection moulding, tooling, and assembly for high-volume production.",
    images: ["/images/hero/hero-poster.jpg"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
