import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Shared/Navbar";
import Foooter from "./components/Shared/Foooter";

const poppins = Poppins({ subsets: ["latin"], weight:["400","600","700"] });

export const metadata: Metadata = {
  title: "Curio Kids",
  description: "A Kids learning app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar/>
     <div className="min-h-screen">
     {children}
     </div>
     <Foooter/>
        </body>
    </html>
  );
}
