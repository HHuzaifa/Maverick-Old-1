import "./globals.css";
import Header from "@/components/Header";
import Head from "./head";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head />
      <body className="bg-[#030023]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
