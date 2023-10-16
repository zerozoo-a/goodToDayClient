"use server";

import { ZodError, ZodIssue } from "zod";
import {
  LoginForm,
  LoginFormSchemaObject,
} from "../../../../schema/login.form";
import { Result } from "../../../../util/types";

// import { ZodError, ZodIssue } from "zod";
// import { FormSchemaObject, SignupForm } from "../../../../schema/signup.form";
// import { Result } from "../../../dashboard/post/actions/postArticle.action";

export async function loginUser(_prevState, formData: FormData) {
  const resultOfRuntimeCheck = checkData(LoginFormSchemaObject, formData);

  if (resultOfRuntimeCheck instanceof ZodError) {
    return <Result<undefined, ZodIssue[]>>{
      success: false,
      data: undefined,
      err: resultOfRuntimeCheck.errors,
    };
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}users/loginHouseUser`,
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
  // const token = await dd () ;
  // set cookie
  // response
  // redirect
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
