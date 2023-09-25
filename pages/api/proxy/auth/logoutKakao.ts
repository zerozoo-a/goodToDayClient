import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
// import { cookies } from "next/headers";

export default async function logoutKakao(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await axios.post<Response>(
      "http://localhost:5050/auth/logoutKakao",
      {},
      {
        headers: {
          authorized: `Bearer ${req.headers.authorized}`,
        },
      }
    );

    // const cookieStore = cookies();
    // console.log("🚀 ~ file: logoutKakao.ts:4 ~ cookies:", cookies);
    // console.log("🚀 ~ file: logoutKakao.ts:22 ~ cookieStore:", cookieStore);
    // cookieStore.delete("houseToken").delete("kakaoToken");
    // console.log("🚀 ~ file: logoutKakao.ts:22 ~ cookieStore:", cookieStore);

    res.json({ ...response.data });
  } catch (err) {
    res.json({ done: false });
  }
}
