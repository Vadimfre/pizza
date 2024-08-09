import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Header from "@/components/shared/header";

const nunito = Nunito({
  subsets: ["cyrillic"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sema Pizza",
  manifest: "/manifest.json",
};

export default function HomeLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="manifest" href="/manifest.json" />
      <body className={nunito.className}>
        <main className="min-h-screen">
          <Header />
          {children}
          {modal}
        </main>
      </body>
    </html>
  );
}
