import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Axiom, a leading software company in the MENA region!",
  description:
    "Welcome to Axiom! One of the leading software development companies in the Middle East. We offer top-quality data analytics, artificial intelligence, and software development services to help businesses streamline their operations, improve outcomes, and drive growth. Contact us today to learn how we can help transform your business in the digital age.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* You can also specify other icon formats */}
        <link rel="icon" type="image/png" href="/icon.png" sizes="32x32" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
