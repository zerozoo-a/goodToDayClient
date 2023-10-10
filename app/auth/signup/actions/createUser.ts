"use server";

import { Result } from "../../../dashboard/post/actions/postArticle.action";

export async function createUser(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirm_password = formData.get("confirm_password");

  const [responseOfIsValidEmail, responseOfIsValidName] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_SERVER}users/findBy/email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    }),
    fetch(`${process.env.NEXT_PUBLIC_SERVER}users/findBy/name`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    }),
  ]);

  const [resultOfIsValidEmail, resultOfIsValidName]: [
    Result<any[]>,
    Result<any[]>
  ] = await Promise.all([
    responseOfIsValidEmail.json(),
    responseOfIsValidName.json(),
  ]);

  if (
    resultOfIsValidEmail.data.length === 0 &&
    resultOfIsValidName.data.length === 0 &&
    password === confirm_password
  ) {
    console.log("ho ye! you can do this");
    return true;
  } else {
    return false;
  }
}
