import Navigator from "../components/navigator/index.server";
// These styles apply to every route in the application
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
        <h1>
          <a href="/">DASH BOARD</a>
        </h1>
        <div className="font-bold underline">
          <Navigator />
        </div>
        {children}
      </body>
    </html>
  );
}
