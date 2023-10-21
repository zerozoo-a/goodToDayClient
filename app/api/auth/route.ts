import { cookies } from "next/headers";

export async function GET(request: Request) {
  const cookieStore = cookies();
  cookieStore.delete("houseToken");

  return Response.redirect(new URL("/", request.url));
}
