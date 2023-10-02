"use client";
import { MouseEvent } from "react";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { deleteKakaoTokenCookies } from "../../app/auth/kakao/actions/setKakaoTokenCoookie.action";

export default function KakaoLogout({
  token,
  logoutKakao,
}: {
  token: RequestCookie;
  logoutKakao: any;
}) {
  return (
    <>
      <a onClick={(_) => logoutKakao(token.value)}>logout</a>
      <div>{token.value}</div>
    </>
  );
}

// async function logoutKakao(
//   e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
//   token: string
// ) {
//   e.preventDefault();
//   try {
//     const url = "api/proxy/auth/kakao/logout";
//     console.log("🚀 ~ file: kakaoLogout.client.tsx:22 ~ url:", url);
//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         authorized: `${token}`,
//       },
//     });
//     const result = await response.json();
//     console.log("🚀 ~ file: kakaoLogout.client.tsx:30 ~ result:", result);
//   } catch (err) {
//     console.error(err);
//   } finally {
//     await deleteKakaoTokenCookies();
//   }
// }
