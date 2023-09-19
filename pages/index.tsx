import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>this is home title</h1>
      <div>
        <Link href="/dashboard/login">go to login</Link>
      </div>
    </div>
  );
}
