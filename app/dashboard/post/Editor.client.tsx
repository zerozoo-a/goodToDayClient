"use client";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { ChangeEvent, createRef, useState } from "react";

export default function Post() {
  const editorRef = createRef<any>();
  const [title, setTitle] = useState<string>("");
  const toolbarItems = [
    ["heading", "bold", "italic", "strike"],
    ["hr", "quote"],
    ["ul", "ol", "task", "indent", "outdent"],
    ["table", "image", "link"],
    ["scrollSync"],
  ];

  async function handleOnClick() {
    const instance = editorRef.current.getInstance();
    const context = instance.getHTML();
    if (validateValues({ title, context })) return;
  }

  function validateValues({
    title,
    context,
  }: {
    title?: string | void;
    context?: string;
  }) {
    if (!title) {
      alert("제목을 입력해주세요");
      return false;
    }
    if (title.length < 3) {
      alert("제목의 길이는 3자 이상으로 제한됩니다.");
      return false;
    }

    if (!context) {
      alert("본문을 입력해주세요");
      return false;
    }

    if (title && context) return true;
  }

  function handleTitleOnChange(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <div className="p-4">
      <TitleInput handleTitleOnChange={handleTitleOnChange} />
      <Editor
        // @ts-ignore
        ref={editorRef}
        hideModeSwitch={true}
        height="500px"
        autofocus
        language="KR"
        usageStatistics={false}
        previewHighlight
        previewStyle="vertical"
        viewer
        toolbarItems={toolbarItems}
        initialValue=" "
      />
      <button onClick={handleOnClick}>글쓰기</button>
    </div>
  );
}

function TitleInput({ handleTitleOnChange }) {
  return (
    <div className="py-4">
      <label htmlFor="title" className="text-gray-600">
        제목:
      </label>
      <input
        type="text"
        id="title"
        className="border rounded-lg px-3 py-2 w-full"
        placeholder="Enter a title"
        onChange={(e) => handleTitleOnChange(e)}
      />
    </div>
  );
}