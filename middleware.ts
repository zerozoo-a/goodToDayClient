import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { cookies } = request;
  checkIsLoggedIn(cookies);
  // return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard/post"],
};

function checkIsLoggedIn(cookies) {
  console.log(
    "🚀 ~ file: middleware.ts:18 ~ checkIsLoggedIn ~ cookies:",
    cookies
  );
}
