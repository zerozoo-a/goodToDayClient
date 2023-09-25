"use server";
import { cookies } from "next/headers";
import { LoginResponseKakao } from "../../pages/api/proxy/auth/loginKakao";
import { redirect } from "next/navigation";

// async function setCookies({ name, value }: { name: string; value: string }) {
//   cookies().set({
//     name,
//     value,
//     httpOnly: true,
//   });

//   return Promise.resolve({
//     actionNow: Date.now(),
//   });
// }

export default async function KaKaoCallBack(props: Props) {
  if (typeof props.searchParams.code === "string") {
    await tryLogin({
      code: props.searchParams.code,
      domain: "http://localhost:3000",
    });
  }

  return <div>로그인 중...</div>;
}

type Props = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

async function tryLogin(body: { code: string; domain: string }) {
  try {
    const url = "http://localhost:3000/api/proxy/auth/loginKakao";
    const response = await fetch(url, {
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(body),
    });
    const result = await response.json();
    console.log("🚀 ~ file: page.tsx:45 ~ tryLogin ~ result:", result);
    // const result: LoginResponseKakao = await response.json();
  } catch (e) {
    console.error(e);
  }
}
