import { Result } from "../post/actions/postArticle.action";

async function getPosts() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER}board`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result: Result<Post[]> = await response.json();

  return result;
}

export { getPosts };

interface Post {
  id: number;
  title: string;
  context: string;
  created_at: string;
  modified_at: string;
  userId: number;
}
