import { createUser } from "./actions/createUser";

export default function SignUp() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">회원가입</h2>
        <form action={createUser} method="POST">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              닉네임:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 p-2 block w-full rounded border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              E-mail:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 p-2 block w-full rounded border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              비밀번호:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="mt-1 p-2 block w-full rounded border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirm_password"
              className="block text-sm font-medium text-gray-700"
            >
              비밀번호 확인:
            </label>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              required
              className="mt-1 p-2 block w-full rounded border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none"
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-indigo-700"
            >
              회원가입
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
