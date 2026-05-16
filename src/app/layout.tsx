import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/app/components";
import localFont from "next/font/local";
import Providers from "./providers";
import Script from "next/script";

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
        <Providers>
          <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
        <Script
          src="https://widget.dentalflo.ai/embed.js?tenantId=xCl6KKbJemXxJtUgql9kp&widgetId=Y7frM8PYMnnSYd75KEtpb"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
