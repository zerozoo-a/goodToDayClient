import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export interface LoginResponse<Domain> {
  accessToken: string;
  message: string;
  domain: Domain;
  redirectURL: string;
}

export interface KakaoLoginResponse {
  auth: KakaoLoginAuthResponse;
  userInfo: KakaoUserInfo;
}
export interface KakaoLoginAuthResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_token_expires_in: string;
  scope: string;
  token_type: string;
}

interface KakaoAccount {
  profile_nickname_needs_agreement: boolean;
  profile_image_needs_agreement: boolean;
  profile: {
    nickname: string;
    thumbnail_image_url: string;
    profile_image_url: string;
    is_default_image: boolean;
  };
  has_email: boolean;
  email_needs_agreement: boolean;
  is_email_valid: boolean;
  is_email_verified: boolean;
  email: string;
}

interface KakaoProperties {
  nickname: string;
  profile_image: string;
  thumbnail_image: string;
}

interface KakaoUserInfo {
  connected_at: string;
  id: number;
  kakao_account: KakaoAccount;
  properties: KakaoProperties;
}

export default async function loginKakao(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data } = await axios.post<Response>(
    "http://localhost:5050/auth/loginKakao",
    {
      body: JSON.stringify({ ...req.body }),
    }
  );

  res.json({ ...data });
}
