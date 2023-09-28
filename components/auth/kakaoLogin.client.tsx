"use client";

import { useEffect } from "react";
import { setKakaoTokenCookies } from "../../app/auth/kakao/actions/setKakaoTokenCoookie.action";
import { LoginResponseKakao } from "../../types/auth";

export default function CLogInKakao({
  loginResponseKakao,
  setKakaoTokenCookies,
}: {
  loginResponseKakao: LoginResponseKakao;
  setKakaoTokenCookies: (
    loginResponseKakao: LoginResponseKakao
  ) => Promise<void>;
}) {
  // const router = useRouter();

  useEffect(() => {
    (async () => {
      try {
        await setKakaoTokenCookies(loginResponseKakao);
        alert("로그인 되었습니다.");
        // router.push("/");
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return <div>login with kakao account...</div>;
}
