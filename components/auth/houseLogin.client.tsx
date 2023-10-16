"use client";

import { useRouter } from "next/navigation";
import { SubmitButton } from "./submitButton.client";

export default function HouseLogin() {
  // const router = useRouter();
  // router.prefetch("/");

  return (
    <form>
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
        {/* <PoliteMessage message={errorMessageMap?.email?.message} /> */}
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
        {/* <PoliteMessage message={errorMessageMap?.password?.message} /> */}
      </div>

      <div className="mt-6">
        <SubmitButton text="로그인" />
      </div>
    </form>
  );
}
