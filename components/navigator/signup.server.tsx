"use server";

import { GoTo } from "../auth/goTo.server";

export default async function SignUpButton() {
  return <GoTo to="/auth/signup" title="회원가입" />;
}
