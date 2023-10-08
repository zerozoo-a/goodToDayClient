"use client";
import { EditorType } from "@toast-ui/editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

export default function Post() {
  const toolbarItems = [
    ["heading", "bold", "italic", "strike"],
    ["hr", "quote"],
    ["ul", "ol", "task", "indent", "outdent"],
    ["table", "image", "link"],
    ["code", "codeblock"],
    ["scrollSync"],
  ];

  function handleOnFocus(event: EditorType) {
    console.log("on focused", event);
  }
  return (
    <Editor
      hideModeSwitch={true}
      height="500px"
      autofocus
      language="KR"
      usageStatistics={false}
      previewHighlight
      previewStyle="vertical"
      viewer
      toolbarItems={toolbarItems}
      onFocus={handleOnFocus}
      initialValue=" "
    />
  );
}
