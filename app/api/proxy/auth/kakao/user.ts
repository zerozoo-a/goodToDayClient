import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export async function getKakaoLoginInfo(token: RequestCookie) {
  try {
    const url = "http://localhost:5050/auth/loginKakaoInfo";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorized: `Bearer ${token?.value}`,
      },
    });

    const data: KakaoLoginInfoResponse = await response.json();

    return data;
  } catch (err) {
    return undefined;
  }
}

export interface KakaoLoginInfoResponse {
  expiresInMillis: number;
  id: number;
  expires_in: number;
  app_id: number;
  appId: number;
  meta: { type: string; mean: string; necessary: boolean };
}
