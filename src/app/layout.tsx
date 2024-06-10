import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/app/components";
import localFont from "next/font/local";

const bookAntiqua = localFont({
  src: "../fonts/bookantiqua.ttf",
});

export const metadata: Metadata = {
  title: "Dr Ersoy Kumsuz",
  description: "Dentist in Sydney",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bookAntiqua.className}>
        <div className="min-h-screen flex flex-col bg-white">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
