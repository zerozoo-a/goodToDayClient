import { GoTo } from "../../components/auth/goTo.server";
import { getPosts } from "./actions/getPosts.action";

export default async function Page() {
  const posts = await getPosts();
  return (
    <div>
      <div className="text-2xl font-bold mb-4">this is dash board page</div>
      <div className="bg-white rounded-lg shadow-md p-4">
        <ul>
          {posts.data.map((post, i) => (
            <li
              key={`${post}_${i}`}
              className="mb-4 p-4 border border-gray-200 rounded"
            >
              <a href={`/dashboard/post/${post.id}`}>
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
              </a>
            </li>
          ))}
        </ul>
      </div>
      <GoTo
        to={"/dashboard/post"}
        title="글쓰기"
        classes="mt-4 block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 text-center"
      />
    </div>
  );
}
