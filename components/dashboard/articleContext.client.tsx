"use client";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Viewer } from "@toast-ui/react-editor";
import { createRef } from "react";

export default function ArticleContext({ context }: { context: string }) {
  const viewerRef = createRef<any>();

  return (
    <div className="p-4">
      <Viewer ref={viewerRef} initialValue={context} />
    </div>
  );
}
