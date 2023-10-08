import { GoTo } from "../../components/auth/goTo.server";

export default async function Page() {
  return (
    <div>
      <div>this is dash board page</div>
      <GoTo to={"/dashboard/post"} title="글쓰기" />
    </div>
  );
}
