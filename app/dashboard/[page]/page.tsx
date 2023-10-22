import Link from "next/link";
import { GoTo } from "../../../components/auth/goTo.server";
import { Pagination } from "../../../components/dashboard/paginator";
import { getArticles } from "../actions/getArticles.action";

export default async function Page({
  params: { page },
}: {
  params: { page: string };
}) {
  const articles = await getArticles(+page);
  const isArticlesAvailable = articles.data.length > 0;
  return (
    <div>
      <div className="text-2xl font-bold mb-4">this is dash board articles</div>
      <div className="bg-white rounded-lg shadow-md mx-4">
        <ul>
          {isArticlesAvailable ? (
            articles.data.map((article, i) => (
              <li
                key={`${article}_${i}`}
                className="border border-gray-200 rounded mb-4"
              >
                <Link
                  href={`/dashboard/article/${article.id}`}
                  className="block p-2"
                >
                  <div>
                    <h4 className="text-lg font-semibold mb-2">
                      {article.title}
                    </h4>
                    <div className="text-sm text-gray-600">
                      생성일: {article.created_at}
                    </div>
                    <div className="text-sm text-gray-600">
                      작성자: {article.name}
                    </div>
                  </div>
                </Link>
              </li>
            ))
          ) : (
            <div>게시글이 없습니다.</div>
          )}
        </ul>
      </div>

      {isArticlesAvailable ? (
        <Pagination
          totalArticles={+articles.data[0].total_articles}
          nowPage={+page}
        />
      ) : undefined}
      <GoTo
        to={"/dashboard/article"}
        title="글쓰기"
        classes="mt-4 block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 text-center m-4"
      />
    </div>
  );
}
