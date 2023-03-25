"use client"
import "./globals.css";
import Header from "@/components/Header";
import Head from "./head";
import Footer from "@/components/Footer";
import { AnimatePresence } from "framer-motion";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head />
      <AnimatePresence mode="wait">
        <body className="bg-[#030023]">
          <Header />
          {children}
          <Footer />
        </body>
      </AnimatePresence>
    </html>
  );
}
