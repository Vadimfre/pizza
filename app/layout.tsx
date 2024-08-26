import { Nunito } from "next/font/google";
import "./globals.css";
import { Providers } from "@/shared/components/providers";
import { Suspense } from "react";
const nunito = Nunito({
  subsets: ["cyrillic"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/logo.png" />
      </head>
      <link rel="manifest" href="/manifest.json" />
      <body className={nunito.className}>
        <Providers> {children}</Providers>
      </body>
    </html>
  );
}
