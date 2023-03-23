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
    <html lang="en">
      <Head />
      <body className="bg-[#161616]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
