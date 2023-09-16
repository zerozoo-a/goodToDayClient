import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function cats(req: NextApiRequest, res: NextApiResponse) {
  const { data } = await axios.get("http://localhost:5050/cats");
  res.json({ data });
}
