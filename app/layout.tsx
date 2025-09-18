import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Ali Yar Khan – Full-Stack Web & Mobile Developer | Freelancer",
  description:
    "Experienced Full-Stack Web & Mobile Developer specializing in MERN stack, React Native, and Flutter. I build high-quality SaaS platforms, responsive web apps, and cross-platform mobile solutions for startups and enterprises worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div id="__next">
          {children}
        </div>
      </body>
    </html>
  );
}
