import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["greek"] });

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_TITLE_METADATA}`,
  description: `${process.env.NEXT_PUBLIC_DESCRIPTION_METADATA}`,
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
