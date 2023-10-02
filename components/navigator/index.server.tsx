"use server";
import Login from "./login.server";

export default async function Navigator() {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-center space-x-4">
        <div className="text-white hover:text-blue-500">
          <Login />
        </div>
      </div>
    </nav>
  );
}
