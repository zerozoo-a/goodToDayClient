import { SignUpForm } from "../../../components/auth/signupForm.client";
import FormWrapper from "../../../components/wrappers/form.wrapper.server";
export default function SignUp() {
  return (
    <FormWrapper title="회원가입" classes="min-h-screen">
      <SignUpForm />
    </FormWrapper>
  );
}
