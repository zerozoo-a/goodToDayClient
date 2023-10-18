"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logoutHouseUser() {
  const cookieStore = cookies();
  cookieStore.delete("houseToken");
  redirect("/");
}
