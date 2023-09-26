import { Params } from "../../../types";
import { PostLoginKakao } from "../../api/proxy/auth/kakao/actions";
import { redirect } from "next/navigation";

export default async function postLogin(params: Params) {
  const domain = process.env.NEXT_PUBLIC_DOMAIN ?? "";
  console.log("🚀 ~ file: page.tsx:9 ~ postLogin ~ domain:", domain);
  const res = await PostLoginKakao(params, domain);
  console.log("🚀 ~ file: page.tsx:9 ~ postLogin ~ res:", res);
  redirect("/");

  return <div>^^</div>;
}

function SetCookies() {}
