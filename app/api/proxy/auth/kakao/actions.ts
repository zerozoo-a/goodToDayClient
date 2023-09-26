"use server";
import { cookies } from "next/headers";
import { Params } from "../../../../../types";
import { NextResponse } from "next/server";

export async function commonAction() {
  cookies().set({
    name: "commonAction",
    value: "I was set via some mechanism calling a server action",
    httpOnly: true,
  });

  return Promise.resolve({
    commonNow: Date.now(),
  });
}

export async function PostLoginKakao(params: Params, domain: string) {
  const endPoint = "http://localhost:5050/auth/loginKakao";
  const body = JSON.stringify({
    code: params.searchParams?.code,
    domain,
    redirectURI: process.env.NEXT_PUBLIC_KAKAO_LOGIN_RES,
  });

  const response = await fetch(endPoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });
  const result: LoginResponseKakao = await response.json();
  return result;
}

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
