"use client";

import { createUser } from "./actions/createUser";

import { experimental_useFormState as useFormState } from "react-dom";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { Result } from "../../dashboard/post/actions/postArticle.action";
import { ZodIssue } from "zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type ErrorMessageKey = "name" | "email" | "password" | "confirm";

export function SignUpForm() {
  const [state, formAction]: [
    undefined | Result | Result<undefined, ZodIssue[]>,
    any
  ] = useFormState(createUser);
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/");
  }, []);

  const errorMessageMap: undefined | { [k in ErrorMessageKey]: ZodIssue } =
    isError(state)
      ? state?.err?.reduce((acc, cur) => {
          const key = cur.path[0];

          if (acc[key]) {
            acc[key] = { ...acc[key], ...cur };
          } else {
            acc[key] = cur;
          }
          return acc;
        }, {})
      : undefined;

  if (errorMessageMap === undefined && state?.success && state.data) {
    alert(`${state.data.message}, 로그인 페이지로 이동합니다.`);
    router.push("/auth/login");
  }

  return (
    <form action={formAction}>
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
        <PoliteMessage message={errorMessageMap?.name?.message} />
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
        <PoliteMessage message={errorMessageMap?.email?.message} />
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
        <PoliteMessage message={errorMessageMap?.password?.message} />
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
        {<PoliteMessage message={errorMessageMap?.confirm?.message} />}
      </div>
      <div className="mt-6">
        <SubmitButton />
      </div>
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

function PoliteMessage({ message }: { message: string | undefined }) {
  if (undefined) return "";
  return (
    <p aria-live="polite" className="text-red-500">
      {message}
    </p>
  );
}

function isError(state: State): boolean {
  if (state === undefined) return false;
  if (state.success) return false;
  return true;
}

type State = undefined | Result | Result<undefined, ZodIssue[]>;
