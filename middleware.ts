import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { Result } from "./util/types";
import { cookies } from "next/headers";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const houseToken = cookieStore.get("houseToken");
  const pathname = request.nextUrl.pathname;

  if (pathname === "/dashboard")
    return NextResponse.redirect(new URL("/dashboard/0", request.url));

  const tokenStatus = await checkHouseToken(houseToken?.value);

  if (tokenStatus !== undefined && tokenStatus.success === false) {
    return NextResponse.redirect(new URL("/api/auth", request.url));
  }

  if (
    pathname !== "/auth/login" &&
    pathname !== "/auth/login/" &&
    pathname !== "/auth/signup" &&
    tokenStatus === undefined
  ) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return;
}

const auth = ["/auth/login", "/auth/signup"];
const posts = ["/dashboard/post"];
// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/auth/login", "/auth/signup", "/dashboard/post", "/dashboard"],
};

async function checkHouseToken(houseToken: string | undefined) {
  if (!houseToken) return;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}/auth/checkHouseToken`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${houseToken}`,
      },
    }
  );
  const result: Result = await response.json();
  return result;
}
