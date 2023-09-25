import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import {
  KakaoLoginResponseDomain,
  LoginResponse,
} from "./api/proxy/auth/loginKakao";
// import cookieCutter from "cookie-cutter";

async function tryLogin(
  body: { code: string; domain: string },
  router: AppRouterInstance
) {
  try {
    const response = await axios.post<LoginResponse<KakaoLoginResponseDomain>>(
      "/api/proxy/auth/loginKakao",
      {
        body,
      }
    );
    if (response.status === 200) {
      // cookieCutter.set("kakaoToken", response.data.domain.auth.access_token);
      // cookieCutter.set("houseToken", response.data.accessToken);
      router.push(response.data.redirectURL);
    }
  } catch (e) {
    console.error(e);
  }
}

export default function KaKaoCallBack() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const code = searchParams?.get("code");
    if (!code) router.push("/");

    (async () => {
      if (code) {
        await tryLogin(
          {
            code,
            domain: window.location.origin,
          },
          router
        );
      }
    })();
  }, [searchParams]);

  return <div>로그인 중...</div>;
}
