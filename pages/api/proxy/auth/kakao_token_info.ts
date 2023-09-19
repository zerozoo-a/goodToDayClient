import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export interface KakaoLoginResponse {
  accessToken: string;
  message: string;
}

export default async function kakaoTokenInfo(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!process.env.NEXT_PUBLIC_KAKAO_AT_INFO_URL) return;

  const { data } = await axios.post<Response>(
    process.env.NEXT_PUBLIC_KAKAO_AT_INFO_URL
  );

  res.json({ ...data });
}
