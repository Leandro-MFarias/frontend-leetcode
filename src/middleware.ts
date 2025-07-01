import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/home", "/exercises"],
}

export function middleware(req: NextRequest) {
  const token = req.cookies.get("accessToken")?.value

  if (!token) {
    return NextResponse.redirect(new URL("/", req.url))
  }
  return NextResponse.next()
}