import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const {
      type,
      name,
      email,
      phone,
      idCard,
      school,
      studentId,
      cardExpiry,
      businessName,
      companyName,
      companyId,
      companyDoc,
    } = req.body;

    console.log("Registration data:", {
      type,
      name,
      email,
      phone,
      idCard,
      school,
      studentId,
      cardExpiry,
      businessName,
      companyName,
      companyId,
      companyDoc,
    });

    res.status(200).json({ message: "Registration successful" });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
