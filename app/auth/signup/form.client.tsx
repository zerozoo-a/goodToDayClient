"use client";

import { createUser } from "./actions/createUser";

import { experimental_useFormState as useFormState } from "react-dom";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export function SignUpForm() {
  const [state, formAction] = useFormState(createUser);
  console.log("🚀 ~ file: form.client.tsx:14 ~ SignUpForm ~ state:", state);

  return (
    <form action={formAction} method="POST">
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          닉네임:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 p-2 block w-full rounded border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          E-mail:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 p-2 block w-full rounded border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          비밀번호:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          className="mt-1 p-2 block w-full rounded border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="confirm_password"
          className="block text-sm font-medium text-gray-700"
        >
          비밀번호 확인:
        </label>
        <input
          type="password"
          id="confirm_password"
          name="confirm_password"
          required
          className="mt-1 p-2 block w-full rounded border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none"
        />
      </div>
      <div className="mt-6">
        <SubmitButton />
      </div>
      {/* <p aria-live="polite">{state?.message}</p> */}
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-indigo-700"
      aria-disabled={pending}
    >
      회원가입
    </button>
  );
}

// function PoliteMessage(err: ) {

// }
