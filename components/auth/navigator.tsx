import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";
import KakaoLogout from "./kakaoLogout.client";

const Login = () => {
  return (
    <div>
      <a href="/auth/login">login</a>
    </div>
  );
};

export default async function Navigator() {
  const cookieStore = cookies();
  const token = cookieStore.get("kakaoToken");

  if (token === undefined) return <Login />;

  const kakaoResponse: KakaoLoginInfoResponse | undefined =
    await queryKakaoLoginInfo(token);

  if (!kakaoResponse) return <div>서버에 문제가 생겼습니다.</div>;

  const isAvailableToken = kakaoResponse.expires_in > 60;

  if (isAvailableToken) return <KakaoLogout token={token} />;
  return <a href="/dashboard/login">login</a>;
}

async function queryKakaoLoginInfo(token: RequestCookie) {
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
