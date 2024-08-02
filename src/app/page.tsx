"use client";
import PageLanding from "@/components/loading-ui/landing-page";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Set timeout untuk menunda navigasi setelah 3 detik
    const timeout = setTimeout(() => {
      router.push("/home"); // Ganti '/halaman-tujuan' dengan halaman tujuan Anda
    }, 3000); // 3000 milliseconds = 3 detik

    // Membersihkan timeout jika komponen dibongkar sebelum timeout selesai
    return () => clearTimeout(timeout);
  }, [router]); // useEffect hanya dijalankan sekali setelah komponen dimuat

  return <PageLanding />;
}
