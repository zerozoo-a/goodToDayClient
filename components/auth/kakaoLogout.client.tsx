"use client";
import { MouseEvent } from "react";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { KakaoLoginInfoResponse } from "./navigator";

export default function KakaoLogout({
  token,
  kakaoResponse,
}: {
  token: RequestCookie;
  kakaoResponse: KakaoLoginInfoResponse;
}) {
  return (
    <a onClick={(e) => logOutKakao(e, token.value, kakaoResponse)}>logout</a>
  );
}

async function logOutKakao(
  e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
  token: string,
  kakaoResponse: KakaoLoginInfoResponse
) {
  e.preventDefault();
  const url = "api/proxy/auth/logoutKakao";
  await fetch(url, {
    method: "POST",
    headers: {
      authorized: `${token}`,
    },
  });
}
