import Link from "next/link";
import { GoTo } from "../../../components/auth/goTo.server";
import { Pagination } from "../../../components/dashboard/paginator";
import { getArticles } from "../actions/getArticles.action";

export default async function Page({
  params: { page },
}: {
  params: { page: string };
}) {
  const posts = await getArticles(+page);
  return (
    <div>
      <div className="text-2xl font-bold mb-4">this is dash board page</div>
      <div className="bg-white rounded-lg shadow-md mx-4">
        <ul>
          {posts.data.map((post, i) => (
            <li
              key={`${post}_${i}`}
              className="border border-gray-200 rounded mb-4"
            >
              <Link href={`/dashboard/post/${post.id}`} className="block p-2">
                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    제목: {post.title}
                  </h4>
                  <div className="text-sm text-gray-600">
                    생성일: {post.created_at}
                  </div>
                  <div className="text-sm text-gray-600">
                    작성자: {post.userId}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Pagination
        totalArticles={+posts.data[0].total_articles}
        nowPage={+page}
      />
      <GoTo
        to={"/dashboard/post"}
        title="글쓰기"
        classes="mt-4 block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 text-center m-4"
      />
    </div>
  );
}
