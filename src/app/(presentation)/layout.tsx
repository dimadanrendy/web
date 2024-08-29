"use client";
import PageFooter from "@/components/components-ui/footer";
import PageFooterInformation from "@/components/components-ui/footer-information";
import PageHeader from "@/components/components-ui/header";
import PageTopInformation from "@/components/components-ui/top-information";
import type { Metadata } from "next";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>

      <div className="min-h-screen w-full">
        <PageTopInformation />
        <PageHeader />
        {children}
        {/* <PageFooterInformation /> */}
        <PageFooter />
      </div>
    </>
  );
}
