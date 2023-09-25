import axios from "axios";

export type LoginResponseKakao = LoginResponse<KakaoLoginResponseDomain>;

export interface KakaoLoginResponseDomain {
  auth: KakaoLoginAuthResponse;
  userInfo: KakaoUserInfo;
}
export interface LoginResponse<Domain> {
  accessToken: string;
  message: string;
  domain: Domain;
  redirectURL: string;
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

export default async function loginKakao(req, res: Response) {
  const { data } = await axios.post<LoginResponseKakao>(
    "http://localhost:5050/auth/loginKakao",
    { data: JSON.stringify({ ...req.body }) }
  );

  // const cookieStore = cookies();

  // cookieStore.set("kakaoToken", data.domain.auth.access_token);
  // cookieStore.set("houseToken", data.accessToken);

  // const response = NextResponse.next();

  // response.cookies.set({
  //   name: "kakaoToken",
  //   value: data.domain.auth.access_token,
  // });
  // response.cookies.set({
  //   name: "houseToken",
  //   value: data.accessToken,
  // });
  // return response;
  res.headers;
  //   res.setHeader(
  //     "Set-Cookie",
  //     `kakaoToken=${data.domain.auth.access_token}; path=/; httpOnly=true;`
  //   );
  //   res.setHeader(
  //     "Set-Cookie",
  //     `houseToken=${data.accessToken}; path=/; httpOnly=true;`
  //   );
  //   res.status(200).json({ ...data });
}
