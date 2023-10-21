import { getArticle } from "../../app/dashboard/actions/getPosts.action";

export const preload = (id: string) => {
  void getArticle(id);
};

export default async function Article({ id }: { id: string }) {
  const result = await getArticle(id);
  console.log("🚀 ~ file: article.tsx:9 ~ Article ~ result:", result);
  return <>hi this is article component</>;
}
