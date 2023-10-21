import Article, { preload } from "../../../../components/dashboard/article";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  preload(id);
  return <Article id={id} />;
}
