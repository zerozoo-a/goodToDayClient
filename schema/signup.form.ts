import { z } from "zod";
type SignupForm = z.infer<typeof FormSchemaObject>;
type FormSchema = typeof FormSchemaObject;

const FormSchemaObject = z
  .object({
    name: z
      .string()
      .min(2, { message: "최소 2 글자 이상으로 닉네임을 정해주세요" }),
    email: z.string().email({ message: "이메일 형식이 올바르지 않습니다." }),
    password: z
      .string()
      .min(6, { message: "최소 6 글자 이상으로 비밀번호를 작성해주세요." }),
    confirmPassword: z
      .string()
      .min(6, { message: "최소 6 글자 이상으로 비밀번호를 작성해주세요." }),
  })
  .refine((form) => form.password === form.confirmPassword, {
    message: "비밀번호가 서로 일치하지 않습니다.",
    path: ["confirm"],
  });

export type { SignupForm, FormSchema };
export { FormSchemaObject };
