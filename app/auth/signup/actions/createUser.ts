"use server";
export async function createUser(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  //   const password = formData.get("password");
  //   const confirm_password = formData.get("confirm_password");

  //   console.log("🚀 ~ file: page.tsx:11 ~ create ~ url:", url);

  const responseOfIsValidEmail = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}users/findBy/email`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    }
  );

  const responseOfIsValidName = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}users/findBy/name`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    }
  );

  const resultOfIsValidEmail = await responseOfIsValidEmail.json();
  console.log(
    "🚀 ~ file: createUser.ts:33 ~ createUser ~ resultOfIsValidEmail:",
    resultOfIsValidEmail
  );
  const resultOfIsValidName = await responseOfIsValidName.json();
  console.log(
    "🚀 ~ file: createUser.ts:35 ~ createUser ~ resultOfIsValidName:",
    resultOfIsValidName
  );

  // const responseUsername = await fetch(
  //   `${process.env.NEXT_PUBLIC_SERVER}users/findBy/username`,
  //   {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ name }),
  //   }
  // );
  // const result = await response.json();
  //   console.log("🚀 ~ file: page.tsx:17 ~ create ~ result:", result);
  // email check || username check from db

  // password === confirm_password check

  // save db
}
