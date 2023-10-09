"use server";
export async function createUser(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  //   const password = formData.get("password");
  //   const confirm_password = formData.get("confirm_password");

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

  const [resultOfIsValidEmail, resultOfIsValidName] = await Promise.all([
    responseOfIsValidEmail.json(),
    responseOfIsValidName.json(),
  ]);
  console.log(
    "🚀 ~ file: createUser.ts:39 ~ createUser ~ resultOfIsValidEmail:",
    resultOfIsValidEmail
  );
  console.log(
    "🚀 ~ file: createUser.ts:36 ~ createUser ~ resultOfIsValidName:",
    resultOfIsValidName
  );

  // email check || username check from db

  // password === confirm_password check

  // save db
}
