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
  const result: Result<boolean, Post[]> = await response.json();

  return result;
}

export { getArticles };

export async function getArticle(
  id: string
): Promise<Result<boolean, Article | undefined>> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/board/${id}`,
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
  userId: number;
  name: string;
  title: string;
  context: string;
  created_at: string;
  modified_at: string;
}
// id: 12,
// title: 'pagination이 성공했습니다 와!',
// context: '<p>해피!</p>',
// created_at: 2023-10-21T14:00:19.000Z,
// modified_at: 2023-10-21T14:00:19.000Z,
// name: 'qwe',
// userId: 12

interface Post {
  id: number;
  title: string;
  context: string;
  created_at: string;
  modified_at: string;
  userId: number;
  total_articles: number;
}
