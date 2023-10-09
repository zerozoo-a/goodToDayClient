import { GoTo } from "../../components/auth/goTo.server";
import { getPosts } from "./actions/getPosts.action";

export default async function Page() {
  const posts = await getPosts();
  return (
    <div>
      <div>this is dash board page</div>
      <div>
        <ul>
          {posts.data.map((post) => (
            <li>
              <div>
                <h4>제목: {post.title}</h4>
                <div>생성일: {post.created_at}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <GoTo to={"/dashboard/post"} title="글쓰기" />
    </div>
  );
}
