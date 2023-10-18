"use client";

export default function HouseLogout({
  title = "로그아웃",
  logoutHouseUser,
}: {
  title: string;
  logoutHouseUser: any;
}) {
  return <a onClick={(_) => logoutHouseUser()}>{title}</a>;
}
