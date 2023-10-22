import { cookies } from "next/headers";
import { Result } from "../../../util/types";

async function getArticles(page = 0) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}/board/pages/${page}`,
    {
      next: { revalidate: 1 },
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const result: Result<boolean, Articles[]> = await response.json();

  return result;
}

export { getArticles };

export async function getArticle(
  id: string
): Promise<Result<boolean, Article | undefined>> {
  try {
    const cookieStore = cookies();
    const houseToken = cookieStore.get("houseToken");
    if (houseToken === undefined) throw new Error("token is not found");

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/board/${id}`,
      {
        method: "GET",
        cache: "default",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${houseToken.value}`,
        },
      }
    );
    const data = await response.json();
    return { success: true, data, err: undefined };
  } catch (err) {
    return { success: false, data: undefined, err };
  }
}

interface Article {
  id: number;
  userId: number;
  name: string;
  title: string;
  context: string;
  created_at: string;
  modified_at: string;
  isArticleOwner: boolean;
}
interface Articles {
  id: number;
  title: string;
  context: string;
  created_at: string;
  modified_at: string;
  userId: number;
  total_articles: number;
  name: string;
}
