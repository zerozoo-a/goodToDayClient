import { cookies } from "next/headers";
import CLogInKakao from "../../../components/auth/kakaoLogin.client";
import { Params } from "../../../types";
import {
  LoginResponseKakao,
  PostLoginKakao,
} from "../../api/proxy/auth/kakao/actions";
import { redirect } from "next/navigation";

export default async function postLogin(params: Params) {
  const domain = process.env.NEXT_PUBLIC_DOMAIN ?? "";
  const loginResponseKakao: LoginResponseKakao = await PostLoginKakao(
    params,
    domain
  );

  async function setKakaoTokenCookies(loginResponseKakao: LoginResponseKakao) {
    "use server";
    cookies().set("kakaoToken", loginResponseKakao.domain.auth.access_token);
    cookies().set("houseToken", loginResponseKakao.accessToken);
  }

  return (
    <CLogInKakao
      loginResponseKakao={loginResponseKakao}
      setKakaoTokenCookies={setKakaoTokenCookies}
    />
  );
}
