"use server";
import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";
import { Buffer } from "buffer";

export default async function withAuth(req: NextRequest) {
  const secretKey = process.env.JWT_SECRET!; // Pastikan Anda mendefinisikan JWT_SECRET di .env
  const secretKeyBuffer = Buffer.from(secretKey, "utf-8");
  const token = req.cookies.get("token")?.value ?? "";

  // Jika token ada dan valid, alihkan dari /login ke halaman dashboard
  const currentPath = req.nextUrl.pathname;
  if (token && currentPath === "/login") {
    try {
      await jwtVerify(token, secretKeyBuffer);
      // Jika token valid, alihkan ke halaman dashboard
      return NextResponse.redirect(new URL("/dashboard", req.url));
    } catch (error) {
      // Jika token tidak valid, hapus cookie dan izinkan akses ke /login
      const res = NextResponse.next();
      res.cookies.delete("token");
      res.cookies.delete("user");
      return res;
    }
  }

  // Jika token tidak ada dan pengguna ingin masuk ke halaman selain login
  if (!token && currentPath !== "/login") {
    // Alihkan pengguna ke halaman login jika token tidak ada
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    // Verifikasi token jika pengguna mencoba mengakses halaman selain login
    if (token) {
      await jwtVerify(token, secretKeyBuffer);
      return NextResponse.next();
    }
  } catch (error) {
    const res = NextResponse.redirect(new URL("/login", req.url));

    // Jika token tidak valid, hapus semua cookie
    res.cookies.delete("token");
    res.cookies.delete("user");

    return res;
  }

  return NextResponse.next();
}
