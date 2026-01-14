import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SmoothScroll from "../components/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MecaMold | Injection Moulding",
  description:
    "MecaMold delivers precision injection moulding, tooling, and production support for high-volume programs.",
  openGraph: {
    title: "MecaMold | Injection Moulding",
    description:
      "Precision injection moulding, tooling, and production support for high-volume programs.",
    images: ["/images/hero/hero-poster.jpg"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
