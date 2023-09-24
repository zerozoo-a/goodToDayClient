"use client";
import Script from "next/script";
import Image from "next/image";

export default function LoginKakao() {
  function loginUsingKakao() {
    window.Kakao.Auth.authorize({
      redirectUri: `${window.location.origin}/${process.env.NEXT_PUBLIC_KAKAO_LOGIN_RES}`,
    });
  }

  return (
    <div>
      <Script
        id="loginKakao"
        strategy="afterInteractive"
        src="https://developers.kakao.com/sdk/js/kakao.js"
        defer
        onLoad={() => {
          window.Kakao.init(process.env.NEXT_PUBLIC_JAVASCRIPT_SDK);
        }}
      ></Script>
      <Image
        src="/static/kakao_login_medium_narrow.png"
        width={183}
        height={45}
        alt="Picture of the author"
        onClick={loginUsingKakao}
      />
    </div>
  );
}

declare global {
  // Kakao 함수를 전역에서 사용할 수 있도록 선언
  interface Window {
    Kakao: any;
  }
}
