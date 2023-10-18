"use server";

import "@toast-ui/editor/dist/toastui-editor.css";
import dynamic from "next/dynamic";
import { postArticle } from "./actions/postArticle.action";

const Editor = dynamic(() => import("./editor.client"), { ssr: false });
export default async function Post() {
  return <Editor postArticle={postArticle} />;
}
