import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { Result } from "./util/types";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const houseToken = cookieStore.get("houseToken");
  const pathname = request.nextUrl.pathname;

  const tokenStatus = await checkHouseToken(houseToken?.value);

  if (tokenStatus === undefined && auth.includes(pathname)) return;

  if (tokenStatus === undefined && posts.includes(pathname))
    return NextResponse.redirect(new URL("/auth/login", request.url));

  if (tokenStatus && !tokenStatus.success)
    return NextResponse.redirect(new URL("/", request.url));
}

const auth = ["/auth/login", "/auth/signup"];
const posts = ["/dashboard/post"];
// See "Matching Paths" below to learn more
export const config = {
  // matcher: ["/auth/:path*", "/dashboard/post"],
  matcher: auth.concat(posts),
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
