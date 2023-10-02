"use client";
import { MouseEvent } from "react";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { deleteKakaoTokenCookies } from "../../app/auth/kakao/actions/setKakaoTokenCookie.action";

export default function KakaoLogout({
  token,
  logoutKakao,
}: {
  token: RequestCookie;
  logoutKakao: any;
}) {
  return (
    <>
      <a onClick={(_) => logoutKakao(token.value)}>logout</a>
      <div>{token.value}</div>
    </>
  );
}
