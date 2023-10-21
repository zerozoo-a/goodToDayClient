"use server";
import { getArticle } from "../../app/dashboard/actions/getArticles.action";

export const preload = (id: string) => {
  void getArticle(id);
};

export default async function Article({ id }: { id: string }) {
  const article = await getArticle(id);
  if (!article.data) return "err";
  return (
    <article>
      <h1>{article.data.title}</h1>
      <div>
        <ul>
          <li>글 번호: {article.data.id}</li>
          <li>작성자: {article.data.name}</li>
          <li>작성 일자: {article.data.created_at}</li>
        </ul>
      </div>
      <div className="divide-solid" />
      <div
        dangerouslySetInnerHTML={{ __html: article.data.context }}
        className="py-4"
      />
      <div>
        <button>수정하기</button>
      </div>
    </article>
  );
}
