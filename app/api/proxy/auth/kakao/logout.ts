"use server";

import { deleteKakaoTokenCookies } from "../../../../auth/kakao/actions/setKakaoTokenCookie.action";

export async function logoutKakao(token: string) {
  const endPoint = "http://localhost:5050/auth/logoutKakao";
  const response = await fetch(endPoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      access_token: token,
    },
  });
  const result: LogoutKakaoResponse = await response.json();
  await deleteKakaoTokenCookies();
  return result;
}

export interface LogoutKakaoResponse {
  id: number;
  status: number;
  redirect: string;
}
