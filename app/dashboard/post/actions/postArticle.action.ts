import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

async function postArticle(token: RequestCookie, { title, context }) {
  "use server";
  await fetch(`${process.env.NEXT_PUBLIC_SERVER}board`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token.value}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, context }),
  });
}

type PostArticle = typeof postArticle;

export { postArticle };
export type { PostArticle };
