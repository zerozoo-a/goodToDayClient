import LoginKakao from "../../../components/auth/kakaoLogin.client";
import { Params } from "../../../types";
import { loginKakao } from "../../api/proxy/auth/kakao/login";

import { setKakaoTokenCookies } from "./actions/setKakaoTokenCookie.action";
import { LoginResponseKakao } from "../../../types/auth";

export default async function postLogin(params: Params) {
  const domain = process.env.NEXT_PUBLIC_DOMAIN ?? "";
  const loginResponseKakao: LoginResponseKakao = await loginKakao(
    params,
    domain
  );

  return (
    <LoginKakao
      loginResponseKakao={loginResponseKakao}
      setKakaoTokenCookies={setKakaoTokenCookies}
    />
  );
}
