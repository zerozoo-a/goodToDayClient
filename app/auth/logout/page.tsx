import { logoutHouseUser } from "./actions/logoutHouseUser";

export default async function Logout() {
  await logoutHouseUser();
}
