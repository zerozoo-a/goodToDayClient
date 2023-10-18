"use server";

import { logoutKakao } from "../../app/api/proxy/auth/kakao/logout";
import KakaoLogout from "../auth/kakaoLogout.client";
import { GoTo } from "../auth/goTo.server";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { logoutHouseUser } from "../../app/auth/logout/actions/logoutHouseUser";
import HouseLogout from "../auth/houseLogout.client";

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
  if (!isLogin) return <GoTo to={"/auth/login"} title={login} />;

  if (kakaoToken)
    return <KakaoLogout token={kakaoToken} logoutKakao={logoutKakao} />;

  if (houseToken)
    return <HouseLogout title={logout} logoutHouseUser={logoutHouseUser} />;

  return <GoTo to={"/auth/login"} title={login} />;
}
