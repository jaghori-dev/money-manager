import dbConnect from "@/db/connect";
import Transaction from "@/db/model/transaction";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    try {
      const transactions = await Transaction.find();
      response.status(200).json(transactions);
      return;
    } catch (error) {
      response.status(400).json(error.message);
    }
  }
  return res.status(400).json({ status: "Method not allowed" });
}
