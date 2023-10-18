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

interface Post {
  id: number;
  title: string;
  context: string;
  created_at: string;
  modified_at: string;
  userId: number;
}
