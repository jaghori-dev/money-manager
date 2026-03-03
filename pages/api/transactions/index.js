import dbConnect from "@/db/connect";
import Transaction from "@/db/models/Transaction";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
  const session = await getServerSession(request, response, authOptions);
  await dbConnect();
  if (request.method === "GET") {
    try {
      if (session) {
        const transactions = await Transaction.find();
        response.status(200).json(transactions);
        return;
      } else {
        response.status(401).json({ status: "Not authorized" });
      }
    } catch (error) {
      console.error(error);
      return response.status(400).json(error.message);
    }
  }
  if (request.method === "POST") {
    try {
      if (session) {
        const newTransaction = request.body;
        await Transaction.create(newTransaction);
        response.status(201).json({ status: "Transaction created" });
        return;
      } else {
        response.status(401).json({ status: "Not authorized" });
      }
    } catch (error) {
      console.error(error);
      response.status(400).json({ status: error.message });
      return;
    }
  }
  return response.status(405).json({ status: "Method not allowed" });
}
