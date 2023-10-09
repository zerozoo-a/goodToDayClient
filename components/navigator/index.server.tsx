"use server";

export default async function Navigator(props) {
  const length = props.children.length;
  const Logo = props.children[0];
  const Lefts = props.children.toSpliced(0, 1);

  return (
    <nav className={`grid grid-cols-6`}>
      {Logo}
      {Lefts.map((left) => (
        <div>{left}</div>
      ))}
    </nav>
  );
}
