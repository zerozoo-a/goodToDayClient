"use client";
import "@toast-ui/editor/dist/toastui-editor.css";
import dynamic from "next/dynamic";
const Editor = dynamic(() => import("./editor.client"), { ssr: false });

export default function Post() {
  return <Editor />;
}
