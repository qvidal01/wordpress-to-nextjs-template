import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AIChatWidget } from "@/components/AIChatWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AIQSO | AI-Powered Infrastructure Solutions",
  description: "Enterprise-grade technology services powered by artificial intelligence. Business Intelligence, Cloud Solutions, Security Services, and Smart Automation.",
  icons: {
    icon: '/aiqso-logo.png',
    apple: '/icon-192.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
        <AIChatWidget />
      </body>
    </html>
  );
}
