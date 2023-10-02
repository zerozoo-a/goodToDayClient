"use client";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export default function KakaoLogout({
  token,
  logoutKakao,
}: {
  token: RequestCookie;
  logoutKakao: any;
}) {
  return <a onClick={(_) => logoutKakao(token.value)}>logout</a>;
}
