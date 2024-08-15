import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bakeuda Pangkalpinang",
  description: "Badan Keuangan Daerah Kota Pangkal Pinang",
  icons: {
    icon: "/images/Lambang_Kota_Pangkalpinang.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
