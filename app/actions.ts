"user server";

import { cookies } from "next/headers";

export async function GET() {
  //   const cart = await createCart()
  console.log("hi!!!!!!");
  cookies().set("cartId", "991199");
}
