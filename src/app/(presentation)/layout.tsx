"use client";
import PageFooter from "@/components/components-ui/footer";
import PageFooterInformation from "@/components/components-ui/footer-information";
import PageHeader from "@/components/components-ui/header";
import PageTopInformation from "@/components/components-ui/top-information";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen w-full">
          <PageTopInformation />
          <PageHeader />
          {children}
          {/* <PageFooterInformation /> */}
          <PageFooter />
        </div>
      </QueryClientProvider>
    </>
  );
}
