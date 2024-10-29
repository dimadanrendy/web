import { NextResponse, NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {
  const token = req.cookies.get("X_ACCESS_TOKEN")?.value ?? "";
  const currentPath = req.nextUrl.pathname;

  const patch =
    currentPath.startsWith("/dashboard") ||
    currentPath.startsWith("/profile") ||
    currentPath.startsWith("/account");

  // Jika pengguna mencoba mengakses /login dan sudah memiliki token, arahkan ke /dashboard
  if (token && currentPath === "/login") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
    // Jika token tidak valid, biarkan pengguna tetap di halaman login
  }

  // Jika pengguna mencoba mengakses halaman dilindungi (misalnya /dashboard, /profile) tanpa token, arahkan ke /login
  if (!token && patch) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/profile/:path*",
    "/login",
    "/account/:path*",
  ],
};
