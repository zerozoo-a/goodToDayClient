import { cookies } from "next/headers";
import CLogInKakao from "../../../components/auth/kakaoLogin.client";
import { Params } from "../../../types";
import { loginKakao } from "../../api/proxy/auth/kakao/login";
import { redirect } from "next/navigation";

import { setKakaoTokenCookies } from "./actions/setKakaoTokenCoookie.action";
import { LoginResponseKakao } from "../../../types/auth";

export default async function postLogin(params: Params) {
  const domain = process.env.NEXT_PUBLIC_DOMAIN ?? "";
  const loginResponseKakao: LoginResponseKakao = await loginKakao(
    params,
    domain
  );

  return (
    <CLogInKakao
      loginResponseKakao={loginResponseKakao}
      setKakaoTokenCookies={setKakaoTokenCookies}
    />
  );
}
