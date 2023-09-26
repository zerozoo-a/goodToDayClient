import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>HOME TITLE</h1>
      <div>
        <h2>LINKS</h2>
        <ul>
          <li>
            <Link href="/dashboard">dash board</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
