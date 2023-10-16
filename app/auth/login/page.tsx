import HouseLogin from "../../../components/auth/houseLogin.client";
import LoginKakao from "../../../components/auth/kakaoLoginButton.client";
import FormWrapper from "../../../components/wrappers/form.wrapper.server";

export default function Page() {
  return (
    <>
      <FormWrapper title={"로그인"} classes="min-h-screen">
        <HouseLogin />
        <LoginKakao />
      </FormWrapper>
    </>
  );
}
