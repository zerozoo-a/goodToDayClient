"use client";
import { MouseEvent } from "react";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export default function KakaoLogout({ token }: { token: RequestCookie }) {
  return <a onClick={(e) => logOutKakao(e, token.value)}>logout</a>;
}

async function logOutKakao(
  e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
  token: string
) {
  e.preventDefault();
  const url = "api/proxy/auth/logoutKakao";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      authorized: `${token}`,
    },
  });
  const result = await response.json();
}
