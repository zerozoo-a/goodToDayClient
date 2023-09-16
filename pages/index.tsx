import Script from "next/script";
import Image from "next/image";

export default function Home() {
  function loginWithKakao() {
    window.Kakao.Auth.authorize({
      redirectUri: `${window.location.origin}/${process.env.NEXT_PUBLIC_KAKAO_LOGIN_RES}`,
    });
  }

  function displayToken() {
    const token = getCookie("authorize-access-token");
    window.Kakao as any;

    if (token) {
      window.Kakao.Auth.setAccessToken(token);
      window.Kakao.Auth.getStatusInfo()
        .then(function (res) {
          if (res.status === "connected") {
            console.log("login success", window.Kakao.Auth.getAccessToken());
          }
        })
        .catch(function (err) {
          window.Kakao.Auth.setAccessToken(null);
        });
    }
  }

  function getCookie(name: string) {
    const parts = document.cookie.split(name + "=");
    if (parts.length === 2) {
      return parts[1].split(";")[0];
    }
  }

  return (
    <div>
      <Script
        id="kakaoLogin"
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
        onClick={loginWithKakao}
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
