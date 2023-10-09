import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
// import { cookies } from "next/headers";

async function postArticle(token: RequestCookie, { title, context }) {
  "use server";

  // const cookieStore = cookies();
  // const isValidUser = await validateHouseToken(token);

  await fetch(`${process.env.NEXT_PUBLIC_SERVER}board`, {
    method: "POST",
    headers: {
      access_token: token.value,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, context }),
  });
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
