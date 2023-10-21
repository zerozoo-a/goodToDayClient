"use server";

import { ZodError, ZodIssue } from "zod";
import {
  LoginForm,
  LoginFormSchemaObject,
} from "../../../../schema/login.form";
import { Result } from "../../../../util/types";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginUser(_prevState, formData: FormData) {
  const resultOfRuntimeCheck = checkData(LoginFormSchemaObject, formData);

  if (resultOfRuntimeCheck instanceof ZodError) {
    return <Result<boolean, undefined, ZodIssue[]>>{
      success: false,
      data: undefined,
      err: resultOfRuntimeCheck.errors,
    };
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}/auth/loginHouseUser`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        email: resultOfRuntimeCheck.email,
        password: resultOfRuntimeCheck.password,
      }),
    }
  );
  const tokenResult: Result = await response.json();
  if (tokenResult.success) {
    const cookieStore = cookies();
    cookieStore.set("houseToken", tokenResult.data);
    redirect("/");
  } else {
    return {
      success: false,
      data: undefined,
      err: { message: "로그인에 실패했습니다." },
    };
  }
}

function checkData(
  FormSchema: typeof LoginFormSchemaObject,
  formData: FormData
): LoginForm | ZodError {
  try {
    return FormSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });
  } catch (err) {
    if (err instanceof ZodError) {
      return err;
    }
    return err;
  }
}
