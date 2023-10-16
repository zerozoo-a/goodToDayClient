"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

export function SubmitButton({ text }: { text: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-indigo-700"
      aria-disabled={pending}
    >
      {text}
    </button>
  );
}
