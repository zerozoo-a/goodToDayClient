"use server";

import { cookies } from "next/headers";
import { LoginResponseKakao } from "../../../../types/auth";

async function setKakaoTokenCookies(loginResponseKakao: LoginResponseKakao) {
  if (!loginResponseKakao) return;

  cookies().set("kakaoToken", loginResponseKakao.domain.auth.access_token);
  cookies().set("houseToken", loginResponseKakao.accessToken);
}

async function deleteKakaoTokenCookies() {
  try {
    cookies().delete("kakaoToken");
    cookies().delete("houseToken");
  } catch (err) {
    console.error("Error deleting kakao token" + err);
  }
}

export { setKakaoTokenCookies, deleteKakaoTokenCookies };
