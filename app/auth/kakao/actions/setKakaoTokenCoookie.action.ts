"use server";

import { cookies } from "next/headers";
import { LoginResponseKakao } from "../../../../types/auth";

async function setKakaoTokenCookies(loginResponseKakao: LoginResponseKakao) {
  if (!loginResponseKakao) return;

  cookies().set("kakaoToken", loginResponseKakao.domain.auth.access_token);
  cookies().set("houseToken", loginResponseKakao.accessToken);
}

async function deleteKakaoTokenCookies() {
  cookies().delete("kakaoToken");
  cookies().delete("houseToken");
}

export { setKakaoTokenCookies, deleteKakaoTokenCookies };
