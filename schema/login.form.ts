import { z } from "zod";
type LoginForm = z.infer<typeof LoginFormSchemaObject>;
type LoginFormSchema = typeof LoginFormSchemaObject;

const LoginFormSchemaObject = z.object({
  email: z.string().email({ message: "이메일 형식이 올바르지 않습니다." }),
  password: z
    .string()
    .min(6, { message: "최소 6 글자 이상으로 비밀번호를 작성해주세요." }),
});

export type { LoginForm, LoginFormSchema };
export { LoginFormSchemaObject };
