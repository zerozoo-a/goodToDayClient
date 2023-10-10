"use server";

export async function createUser(formData: FormData) {
  const name = formData.get("name");
  console.log("🚀 ~ file: createUser.ts:7 ~ createUser ~ name:", name);
  const email = formData.get("email");
  console.log("🚀 ~ file: createUser.ts:8 ~ createUser ~ email:", email);
  const password = formData.get("password");
  console.log("🚀 ~ file: createUser.ts:9 ~ createUser ~ password:", password);
  const confirm_password = formData.get("confirm_password");
  console.log(
    "🚀 ~ file: createUser.ts:10 ~ createUser ~ confirm_password:",
    confirm_password
  );

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}users/createHouseUser`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    }
  );

  const result = await response.json();
  console.log("🚀 ~ file: createUser.ts:26 ~ createUser ~ result:", result);

  // const [responseOfIsValidEmail, responseOfIsValidName] = await Promise.all([
  //   fetch(`${process.env.NEXT_PUBLIC_SERVER}users/findBy/email`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ email }),
  //   }),
  //   fetch(`${process.env.NEXT_PUBLIC_SERVER}users/findBy/name`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ name }),
  //   }),
  // ]);

  // const [resultOfIsValidEmail, resultOfIsValidName]: [
  //   Result<any[]>,
  //   Result<any[]>
  // ] = await Promise.all([
  //   responseOfIsValidEmail.json(),
  //   responseOfIsValidName.json(),
  // ]);

  // if (
  //   resultOfIsValidEmail.data.length === 0 &&
  //   resultOfIsValidName.data.length === 0 &&
  //   password === confirm_password
  // ) {
  //   return true;
  // } else {
  //   return false;
  // }
}
