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
  if (request.method === "PUT") {
    const newTransaction = request.body;
    try {
      const updateTransaction = await Transaction.findByIdAndUpdate(
        id,
        newTransaction
      );
      if (!updateTransaction) {
        return response.status(404).json({
          error: "Transaction not found",
        });
      }
      return response.status(200).json({
        success: true,
        data: updateTransaction,
      });
    } catch (error) {
      response.status(400).json({ error: error.message });
      return;
    }
  }
  if (request.method === "DELETE") {
    try {
      const deleteTransaction = await Transaction.findByIdAndDelete(id);
      if (!deleteTransaction) {
        response.status(400).json({ success: "Transaction not found" });
        return;
      }
      response.status(200).json({ success: true });
      return;
    } catch (error) {
      response.status(400).json({ error: message });
      return;
    }
  }
  response.status(405).json({ status: "Method not allowed." });
  return;
}
