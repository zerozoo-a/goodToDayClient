import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function kakaoLogin(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data } = await axios.post("http://localhost:5050/auth/kakaoLogin", {
    body: req.body,
  });
  res.json({ ...data });
}
