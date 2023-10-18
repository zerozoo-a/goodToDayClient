"use server";

import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { RedirectType, redirect } from "next/navigation";
import { Result } from "../../../../util/types";
import { cookies } from "next/headers";

async function postArticle({ title, context }) {
  const cookieStore = cookies();
  const houseToken = cookieStore.get("houseToken");

  if (houseToken === undefined) {
    const err: Result = {
      success: false,
      data: undefined,
      err: { message: "로그인이 필요합니다.", redirect: "/auth/login" },
    };
    return err;
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER}board`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${houseToken.value}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, context }),
  });

  const result: Result = await response.json();
  redirect("/dashboard", RedirectType.replace);
}

type PostArticle = typeof postArticle;

async function validateHouseToken(token: RequestCookie): Promise<boolean> {
  "use server";
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}auth/validateHouseToken`,
    {
      method: "GET",
      headers: {
        access_token: token.value,
      },
    }
  );

  const result = await response.json();
  return result.status;
}

type ValidateHouseToken = typeof validateHouseToken;

export { postArticle, validateHouseToken };
export type { PostArticle, ValidateHouseToken };
