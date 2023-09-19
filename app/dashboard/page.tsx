import KakaoLogin from "./kakaoLogin.client";
import { cookies } from "next/headers";

async function getData() {
  const res = await fetch("http://localhost:5050");
  if (process.env.NEXT_PUBLIC_KAKAO_AT_INFO_URL) {
    const res2 = await fetch(process.env.NEXT_PUBLIC_KAKAO_AT_INFO_URL, {
      headers: { Authorization: `Bearer ${cookies().get("kakaoToken")}` },
    });

    console.log("🚀 ~ file: page.tsx:9 ~ getData ~ res2:", res2);
  }

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

  return (
    <>
      <div>
        <KakaoLogin />
        {data.map((_a, i) => (
          <div>{i + 1}</div>
        ))}
      </div>
    </>
  );
}
