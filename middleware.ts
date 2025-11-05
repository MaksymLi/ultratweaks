import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const protectedPaths = [
    "/dashboard", 
    "/auth/signout", 
  ];
  const loginPaths = ["/auth/signin"]

  const isProtectedPath = protectedPaths.some((p) => pathname.startsWith(p))
  const isLoginPath = loginPaths.some((p) => pathname.startsWith(p))

  if (!isProtectedPath && !isLoginPath) {
    return NextResponse.next();
  }

  if (isProtectedPath && !token){
    return NextResponse.redirect(new URL("/auth/signin", req.url));
  }

  if (isLoginPath && token) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

