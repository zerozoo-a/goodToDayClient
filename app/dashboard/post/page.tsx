"use server";

import "@toast-ui/editor/dist/toastui-editor.css";
import dynamic from "next/dynamic";
import { cookies } from "next/headers";
import { postArticle } from "./actions/postArticle.action";
const Editor = dynamic(() => import("./editor.client"), { ssr: false });

export default async function Post() {
  const cookieStore = cookies();
  const token = cookieStore.get("houseToken");
  if (!token || !token.value) return <>로그인이 필요한 페이지입니다.</>;
  return <Editor token={token} postArticle={postArticle} />;
}
