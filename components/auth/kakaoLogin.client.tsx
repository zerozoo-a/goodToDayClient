"use client";

import { useEffect } from "react";
import { setKakaoTokenCookies } from "../../app/auth/kakao/actions/setKakaoTokenCoookie.action";
import { LoginResponseKakao } from "../../types/auth";
import { useRouter } from "next/navigation";

export default function CLogInKakao({
  loginResponseKakao,
  setKakaoTokenCookies,
}: {
  loginResponseKakao: LoginResponseKakao;
  setKakaoTokenCookies: (
    loginResponseKakao: LoginResponseKakao
  ) => Promise<void>;
}) {
  const router = useRouter();

  useEffect(() => {
    (async () => {
      try {
        await setKakaoTokenCookies(loginResponseKakao);
        router.push("/");
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return <div>login with kakao account...</div>;
}
