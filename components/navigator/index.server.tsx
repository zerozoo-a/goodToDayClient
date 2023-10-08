"use server";

export default async function Navigator(props) {
  const Logo = props.children[0];
  const Lefts = props.children.toSpliced(0, 1);

  return (
    <nav className="grid grid-cols-6">
      {Logo}
      <div className="grid grid-cols-2 col-start-2">{Lefts}</div>
    </nav>
  );
}
