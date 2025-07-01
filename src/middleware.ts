import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/", "/exercises"],
}

export function middleware(req: NextRequest) {
  const token = req.cookies.get("accessToken")?.value
  console.log("middleware ", token);

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url))
  }
  return NextResponse.next()
}