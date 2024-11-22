import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const srirachaRegular = localFont({
  src: "./fonts/Sriracha-Regular.woff2",
  variable: "--sriracha-regular",})

export const metadata: Metadata = {
  title: "Majulah Green SG",
  description: "Rooted in community, growing for good.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${srirachaRegular.variable}`}>
        {children}
      </body>
    </html>
  );
}
