import Script from "next/script";

async function getData() {
  const res = await fetch("http://localhost:5050");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const result = res.json();
  return result;
}

declare global {
  // Kakao 함수를 전역에서 사용할 수 있도록 선언
  interface Window {
    Kakao: any;
  }
}

export default async function Page() {
  const data = await getData();

  function loginWithKakao() {
    window.Kakao.Auth.authorize({
      redirectUri: "https://developers.kakao.com/tool/demo/oauth",
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
          console.log("🚀 ~ file: page.tsx:40 ~ displayToken ~ err:", err);
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
    <>
      <Script
        id="kakaoLogin"
        strategy="afterInteractive"
        src="https://developers.kakao.com/sdk/js/kakao.js"
      ></Script>
      <div>
        {data.map((_a, i) => (
          <div>{i + 1}</div>
        ))}
      </div>
    </>
  );
}
