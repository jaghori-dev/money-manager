import dbConnect from "@/db/connect";
import Transaction from "@/db/models/Transaction";
import useSWR from "swr";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  if (request.method === "GET") {
    const transaction = await Transaction.findById(id);
    if (!transaction) {
      response.status(404).json({ status: "transaction not found" });
      return;
    }
    response.status(200).json(transaction);
    return;
  }
  response.status(405).json({ status: "Method not allowed." });
  return;
}
