"use server";
import { Params } from "../../../../../types";
import { LoginResponseKakao } from "../../../../../types/auth";

export async function loginKakao(params: Params, domain: string) {
  const endPoint = "http://localhost:5050/auth/loginKakao";
  const body = JSON.stringify({
    code: params.searchParams?.code,
    domain,
    redirectURI: process.env.NEXT_PUBLIC_KAKAO_LOGIN_RES,
  });

  const response = await fetch(endPoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });
  const result: LoginResponseKakao = await response.json();
  return result;
}
