import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const description =
  "aminocalculator turns a peptide vial and a volume of bacteriostatic water into an exact draw in U-100 insulin-syringe units, with research protocols compiled from peer-reviewed literature.";

export const metadata: Metadata = {
  applicationName: "aminocalculator",
  title: {
    default: "aminocalculator — Peptide Reconstitution & Dosage Calculator",
    template: "%s · aminocalculator",
  },
  description,
  openGraph: {
    siteName: "aminocalculator",
    type: "website",
    title: "aminocalculator — Peptide Reconstitution & Dosage Calculator",
    description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
