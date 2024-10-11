import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    // match all routes except static files and APIs
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};

export function middleware(request: NextRequest) {
  // Add a new header x-current-path which passes the path to downstream components
  const headers = new Headers(request.headers);
  headers.set(
    "x-current-url",
    `${request.nextUrl.origin}${request.nextUrl.pathname}`,
  );
  return NextResponse.next({ headers });
}
