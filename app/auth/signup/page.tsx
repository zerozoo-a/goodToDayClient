export default function SignUp() {
  async function create(formData: FormData) {
    "use server";
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">User Signup</h2>
        <form action={create} method="POST">
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="mt-1 p-2 block w-full rounded border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
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
              Password:
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
              Confirm Password:
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
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
