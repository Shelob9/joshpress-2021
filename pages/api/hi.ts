import { NextApiRequest, NextApiResponse } from "next";

//Says Hi to Roy
export default async (req: NextApiRequest, res: NextApiResponse) => {
	res.setHeader("Content-Type", "application/json");
	res.setHeader("Cache-Control", "s-maxage=360");
	res.status(200).json({ hi: "Roy" });
};
