export const GoTo = (
  { to, title }: { to: string; title: string } = { to: "/", title: "..." }
) => {
  return (
    <div>
      <a href={to}>{title}</a>
    </div>
  );
};
