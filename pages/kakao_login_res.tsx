import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import {
  KakaoLoginResponse,
  LoginResponse,
} from "./api/proxy/auth/kakao_login";
import cookieCutter from "cookie-cutter";

async function tryLogin(
  body: { code: string; domain: string },
  router: AppRouterInstance
) {
  try {
    const response = await axios.post<LoginResponse<KakaoLoginResponse>>(
      "/api/proxy/auth/kakao_login",
      {
        body: JSON.stringify(body),
      }
    );
    if (response.status === 200) {
      console.log("🚀 ~ file: kakao_login_res.tsx:20 ~ response:", response);
      cookieCutter.set("kakaoToken", response.data.domain.access_token);
      console.info("message from server: ", response.data.message);
      router.push("/dashboard");
    }
  } catch (e) {
    alert(e.message);
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
        const body = {
          code,
          domain: window.location.origin,
        };
        await tryLogin(body, router);
      }
    })();
  }, [searchParams]);

  return <div>로그인 중...</div>;
}
