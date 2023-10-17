import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { Result } from "./util/types";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const houseToken = cookieStore.get("houseToken");
  const { pathname } = request.nextUrl;

  // 로그인하지 않은 유저가 post로 접근하는 것을 튕겨냄
  if (pathname === "/dashboard/post" && !houseToken) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  } else {
    const tokenStatus = await checkHouseToken(houseToken?.value);

    // 이미 로그인 된 유저를 홈으로 보냄
    if (tokenStatus && tokenStatus.success) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard/post", "/auth/:path*"],
};

async function checkHouseToken(houseToken: string | undefined) {
  if (!houseToken) return;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}auth/checkHouseToken`,
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
