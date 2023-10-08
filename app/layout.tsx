import Navigator from "../components/navigator/index.server";
import { GoTo } from "../components/auth/goTo.server";
import Login from "../components/navigator/login.server";

import "./globals.css";

export const metadata = {
  title: "딩동댕댕이하우스",
  description: "바다와 개",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <body>
        <div className="font-bold underline">
          <Navigator>
            <GoTo to={"/"} title="home" />
            <GoTo to={"/dashboard"} title="게시판" />
            <Login />
          </Navigator>
        </div>
        {children}
      </body>
    </html>
  );
}
