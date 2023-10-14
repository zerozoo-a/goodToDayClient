import { SignUpForm } from "./form.client";

export default function SignUp() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">회원가입</h2>
        <SignUpForm />
      </div>
    </div>
  );
}
