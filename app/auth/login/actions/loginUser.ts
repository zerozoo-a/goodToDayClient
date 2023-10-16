"use server";

import { ZodError } from "zod";
import {
  LoginForm,
  LoginFormSchemaObject,
} from "../../../../schema/login.form";

// import { ZodError, ZodIssue } from "zod";
// import { FormSchemaObject, SignupForm } from "../../../../schema/signup.form";
// import { Result } from "../../../dashboard/post/actions/postArticle.action";

export async function loginUser(formData: FormData) {
  const resultOfRuntimeCheck = checkData(LoginFormSchemaObject, formData);

  if (resultOfRuntimeCheck instanceof ZodError) {
    return {
      success: false,
      data: undefined,
      err: resultOfRuntimeCheck.errors,
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
