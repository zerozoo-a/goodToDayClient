import Article, { preload } from "../../../components/dashboard/article";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  preload(id);
  return (
    <div>
      hi this is page
      <Article id={id} />
    </div>
  );
}
