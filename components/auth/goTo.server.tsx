export const GoTo = (
  { to, title, classes }: { to: string; title: string; classes: string } = {
    to: "/",
    title: "...",
    classes: "",
  }
) => {
  return (
    <a href={to} className={classes}>
      {title}
    </a>
  );
};
