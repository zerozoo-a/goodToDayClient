"use server";

// import { cookies } from "next/headers";
// import {
//   KakaoLoginInfoResponse,
//   getKakaoLoginInfo,
// } from "../../app/api/proxy/auth/kakao/user";
import { logoutKakao } from "../../app/api/proxy/auth/kakao/logout";
import KakaoLogout from "../auth/kakaoLogout.client";
import { GoTo } from "../auth/goTo.server";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export default async function Login({
  isLogin,
  houseToken,
  kakaoToken,
}: {
  isLogin: boolean;
  houseToken: RequestCookie | undefined;
  kakaoToken: RequestCookie | undefined;
}) {
  const login = "로그인";
  const logout = "로그아웃";

  // 로그인 되지 않은 경우 loing 표시
  if (!houseToken || !kakaoToken)
    return <GoTo to={"/auth/login"} title={login} />;

  if (kakaoToken)
    return <KakaoLogout token={kakaoToken} logoutKakao={logoutKakao} />;

  if (houseToken) return <GoTo to={"/auth/login"} title={logout} />;

  return <GoTo to={"/auth/login"} title={login} />;
  // if (!isLogin) return <GoTo to={"/auth/login"} title={login} />;

  // const kakaoResponse: KakaoLoginInfoResponse | undefined = kakaoToken
  //   ? await getKakaoLoginInfo(kakaoToken)
  //   : undefined;

  // if (!kakaoResponse) return <div>서버에 문제가 생겼습니다.</div>;

  // const isAvailableToken = kakaoResponse.expires_in > 60;

  // if (isAvailableToken && kakaoToken)
  //   return <KakaoLogout token={kakaoToken} logoutKakao={logoutKakao} />;
  // return <GoTo to={"/auth/login"} title={login} />;
}
