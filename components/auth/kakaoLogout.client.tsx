"use client";
import { MouseEvent } from "react";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { deleteKakaoTokenCookies } from "../../app/auth/kakao/actions/setKakaoTokenCoookie.action";

export default function KakaoLogout({ token }: { token: RequestCookie }) {
  return <a onClick={(e) => logOutKakao(e, token.value)}>logout</a>;
}

async function logOutKakao(
  e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
  token: string
) {
  e.preventDefault();
  try {
    const url = "api/proxy/auth/kakao/logoutKakao";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        authorized: `${token}`,
      },
    });
    const result = await response.json();
    alert("로그아웃 되었습니다.");
  } catch (err) {
    console.error(err);
  } finally {
    await deleteKakaoTokenCookies();
  }
}
