"use server";

import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";
import KakaoLogout from "./kakaoLogout.client";
import {
  KakaoLoginInfoResponse,
  queryKakaoLoginInfo,
} from "../../app/api/proxy/auth/kakao/user";
import { GoToLogin } from "./goToLogin.server";
import { logoutKakao } from "../../app/api/proxy/auth/kakao/logout";

export default async function Navigator() {
  const cookieStore = cookies();
  const token = cookieStore.get("kakaoToken");

  if (token === undefined) return <GoToLogin />;

  const kakaoResponse: KakaoLoginInfoResponse | undefined =
    await queryKakaoLoginInfo(token);

  if (!kakaoResponse) return <div>서버에 문제가 생겼습니다.</div>;

  const isAvailableToken = kakaoResponse.expires_in > 60;

  if (isAvailableToken)
    return <KakaoLogout token={token} logoutKakao={logoutKakao} />;
  return <GoToLogin />;
}
