import Navigator from "../components/navigator/index.server";
import { GoTo } from "../components/auth/goTo.server";
import LoginOut from "../components/navigator/loginout.server";
import { cookies } from "next/headers";

import "./globals.css";
import SignUpButton from "../components/navigator/signup.server";

export const metadata = {
  title: "딩동댕댕이하우스",
  description: "바다와 개",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const houseToken = cookieStore.get("houseToken") || undefined;
  const kakaoToken = cookieStore.get("kakaoToken") || undefined;

  const hasToken =
    (houseToken && houseToken.value.length > 1) ||
    (kakaoToken && kakaoToken.value.length > 1);
  const isLogin = hasToken ? true : false;

  return (
    <html lang="kr">
      <body>
        <div className="font-bold underline">
          <Navigator>
            <GoTo to={"/"} title="home" />
            <GoTo to={"/dashboard"} title="게시판" />
            <LoginOut
              isLogin={isLogin}
              houseToken={houseToken}
              kakaoToken={kakaoToken}
            />
            {!isLogin && <SignUpButton />}
          </Navigator>
        </div>
        {children}
      </body>
    </html>
  );
}
