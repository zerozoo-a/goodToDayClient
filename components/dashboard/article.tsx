"use server";
import { getArticle } from "../../app/dashboard/actions/getArticles.action";

export const preload = (id: string) => {
  void getArticle(id);
};

export default async function Article({ id }: { id: string }) {
  const article = await getArticle(id);
  if (!article.data) return "err";
  return (
    <article className="bg-white shadow-md p-4 rounded-lg">
      <h1 className="text-3xl font-semibold mb-4">{article.data.title}</h1>
      <div className="mb-4">
        <ul>
          <li className="mb-2">글 번호: {article.data.id}</li>
          <li className="mb-2">작성자: {article.data.name}</li>
          <li className="mb-2">작성 일자: {article.data.created_at}</li>
        </ul>
      </div>
      <hr className="my-4 border-t-2 border-solid border-gray-300" />
      <div
        dangerouslySetInnerHTML={{ __html: article.data.context }}
        className="py-4"
      />
      {article.data.isArticleOwner ? (
        <div className="mt-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            수정하기
          </button>
        </div>
      ) : undefined}
    </article>
  );
}
