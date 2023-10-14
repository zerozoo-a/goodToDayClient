import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { redirect } from "next/navigation";

async function postArticle(token: RequestCookie, { title, context }) {
  "use server";

  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER}board`, {
    method: "POST",
    headers: {
      access_token: token.value,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, context }),
  });

  const result: Result = await response.json();
  redirect(result.data.redirect);
}

type PostArticle = typeof postArticle;

async function validateHouseToken(token: RequestCookie): Promise<boolean> {
  "use server";
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}users/validateHouseToken`,
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

export interface Result<T = any, K = any> {
  success: boolean;
  data: T;
  err: K;
}
