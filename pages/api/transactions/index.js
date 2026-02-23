import dbConnect from "@/db/connect";
import Transaction from "@/db/models/Transaction";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    try {
      const transactions = await Transaction.find();
      response.status(200).json(transactions);
      return;
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }
  return response.status(405).json({ status: "Method not allowed" });
}
