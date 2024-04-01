import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jotion",
  description: "The connected workspace where better, faster work happens",
  icons:[
    {
      media:"(prefers-color-scheme: light)",
      url:"/logo.svg",
      href:"/logo.svg"
    },
    {
      media:"(prefers-color-scheme: dark)",
      url:"/logo-dark.svg",
      href:"/logo-dark.svg"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-red-500`}>{children}
      </body>
    </html>
  );
}
