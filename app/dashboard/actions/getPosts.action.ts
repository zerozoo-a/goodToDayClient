import { Result } from "../../../util/types";

async function getPosts() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER}board`, {
    next: { revalidate: 1 },
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result: Result<boolean, Post[]> = await response.json();

  return result;
}

export { getPosts };

export async function getArticle(
  id: string
): Promise<Result<boolean, Article | undefined>> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}board/${id}`,
      {
        method: "GET",
        cache: "default",
        headers: {
          "Content-Type": "application/json",
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
  name: string;
  title: string;
  context: string;
  created_at: string;
  modified_at: string;
}

interface Post {
  id: number;
  title: string;
  context: string;
  created_at: string;
  modified_at: string;
  userId: number;
}
