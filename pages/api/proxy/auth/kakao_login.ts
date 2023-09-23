import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export interface LoginResponse<Domain> {
  accessToken: string;
  message: string;
  domain: Domain;
}

export interface KakaoLoginResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_token_expires_in: string;
  scope: string;
  token_type: string;
}

export default async function kakaoLogin(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data } = await axios.post<Response>(
    "http://localhost:5050/auth/kakaoLogin",
    {
      body: req.body,
    }
  );

  res.json({ ...data });
}
