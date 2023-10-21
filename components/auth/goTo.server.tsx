import Link from "next/link";

export const GoTo = (
  { to, title, classes }: { to: string; title: string; classes: string } = {
    to: "/",
    title: "...",
    classes: "",
  }
) => {
  return (
    <Link href={to} className={classes}>
      {title}
    </Link>
  );
};
