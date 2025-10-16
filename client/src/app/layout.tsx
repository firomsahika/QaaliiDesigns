import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import { BackgroundAnimation } from "@/components/BackgroundAnimation";

const monaSans = Mona_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mona-sans",
});

export const metadata: Metadata = {
  title: "Qaalii Designs",
  description: "Discover the best Ethiopian designers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={monaSans.className}>
      <body className="antialiased relative min-h-screen">
        {/* Background animation behind everything */}
        <div className="fixed inset-0 -z-10">
          {/* <BackgroundAnimation /> */}
        </div>

        {/* Foreground content */}
        <div className="relative z-10">
          <Header />
          <main className="px-10 ">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
