import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

async function tryLogin(body: { code: string; domain: string }) {
  const res1 = await axios.post("/api/proxy/auth/kakao_login", {
    body: JSON.stringify(body),
  });
}

export default function KaKaoCallBack() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const code = searchParams?.get("code");
    if (!code) router.push("/");

    (async () => {
      if (code) {
        const body = {
          code,
          domain: window.location.origin,
        };
        console.log("🚀 ~ file: kakao_login_res.tsx:29 ~ body:", body);
        await tryLogin(body);
      }
    })();
  }, [searchParams]);

  return <div>result of kakao login</div>;
}
