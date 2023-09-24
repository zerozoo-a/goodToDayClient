import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function logoutKakao(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await axios.post<Response>(
      "http://localhost:5050/auth/logoutKakao",
      {},
      {
        headers: {
          authorized: `Bearer ${req.headers.authorized}`,
        },
      }
    );
    res.json({ done: true });
  } catch (err) {
    res.json({ done: false });
  }
}
