import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

async function tryLogin(body: { code: string; domain: string }) {
  try {
    const response = await axios.post("/api/proxy/auth/kakao_login", {
      body: JSON.stringify(body),
    });
    if (response.status === 200) {
      console.info("message from server: ", response.data.message);
    }
  } catch (e) {
    alert(e.message);
  }
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
        await tryLogin(body);
      }
    })();
  }, [searchParams]);

  return <div>result of kakao login</div>;
}
