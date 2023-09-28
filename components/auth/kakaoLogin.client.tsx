"use client";

import { useEffect } from "react";
import { LoginResponseKakao } from "../../app/api/proxy/auth/kakao/actions";
import { redirect } from "next/navigation";

export default function CLogInKakao({
  loginResponseKakao,
  setKakaoTokenCookies,
}: {
  loginResponseKakao: LoginResponseKakao;
  setKakaoTokenCookies: (
    loginResponseKakao: LoginResponseKakao
  ) => Promise<void>;
}) {
  useEffect(() => {
    (async () => {
      try {
        await setKakaoTokenCookies(loginResponseKakao);
        redirect("/");
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return <div>login with kakao account...</div>;
}
