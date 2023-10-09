"use server";

import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";
import {
  KakaoLoginInfoResponse,
  getKakaoLoginInfo,
} from "../../app/api/proxy/auth/kakao/user";
import { logoutKakao } from "../../app/api/proxy/auth/kakao/logout";
import KakaoLogout from "../auth/kakaoLogout.client";
import { GoTo } from "../auth/goTo.server";

export default async function Login() {
  const cookieStore = cookies();
  const token = cookieStore.get("kakaoToken");
  console.log("🚀 ~ file: login.server.tsx:16 ~ Login ~ token:", token);

  if (token === undefined || token.value === "")
    return <GoTo to={"/auth/login"} title={"login"} />;

  const kakaoResponse: KakaoLoginInfoResponse | undefined =
    await getKakaoLoginInfo(token);

  if (!kakaoResponse) return <div>서버에 문제가 생겼습니다.</div>;

  const isAvailableToken = kakaoResponse.expires_in > 60;

  if (isAvailableToken)
    return <KakaoLogout token={token} logoutKakao={logoutKakao} />;
  return <GoTo to={"/auth/login"} title={"login"} />;
}
