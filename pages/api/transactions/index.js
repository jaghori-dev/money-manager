import dbConnect from "@/db/connect";
import Transaction from "@/db/models/Transaction";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import { getToken } from "next-auth/jwt";

export default async function handler(request, response) {
  const session = await getServerSession(request, response, authOptions);

  await dbConnect();
  const token = await getToken({ req: request });

  if (request.method === "GET") {
    try {
      const owner = token?.sub || "default";
      const transactions = await Transaction.find({ owner });
      response.status(200).json(transactions);
      return;
    } catch (error) {
      console.error(error);
      response.status(400).json(error.message);
      return;
    }
  }
  if (!session) {
    response.status(401).json({ status: "Not authorized" });
    return;
  }
  if (request.method === "POST") {
    try {
      const newTransaction = request.body;
      await Transaction.create({
        ...newTransaction,
        owner: token?.sub,
      });
      response.status(201).json({ status: "Transaction created" });
      return;
    } catch (error) {
      console.error(error);
      response.status(400).json({ status: error.message });
      return;
    }
  }
  return response.status(405).json({ status: "Method not allowed" });
}
