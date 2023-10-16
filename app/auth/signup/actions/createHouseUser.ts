"use server";

import { ZodError, ZodIssue } from "zod";
import { FormSchemaObject, SignupForm } from "../../../../schema/signup.form";
import { Result } from "../../../../util/types";
// import { Result } from "../../../dashboard/post/actions/postArticle.action";
// import { ifErrorReturnErrorResult } from "../../../../util/auth/isError";

export async function createUser(
  _prevState: any,
  formData: FormData
): Promise<Result | Result<undefined, ZodIssue[]>> {
  const resultOfRuntimeCheck = checkData(FormSchemaObject, formData);

  if (resultOfRuntimeCheck instanceof ZodError) {
    return {
      success: false,
      data: undefined,
      err: resultOfRuntimeCheck.errors,
    };
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}users/createHouseUser`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        name: resultOfRuntimeCheck.name,
        email: resultOfRuntimeCheck.email,
        password: resultOfRuntimeCheck.password,
      }),
    }
  );
  const result = await response.json();
  return result;
}

function checkData(
  FormSchema: typeof FormSchemaObject,
  formData: FormData
): SignupForm | ZodError {
  try {
    return FormSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirm_password"),
    });
  } catch (err) {
    if (err instanceof ZodError) {
      return err;
    }
    return err;
  }
}
