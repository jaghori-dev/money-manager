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
      console.error(error)
      return response.status(400).json(error.message);
    }
  }
  if(request.method === 'POST'){
    const newTransaction = request.body
    try{
      await Transaction.create(newTransaction)
      response.status(201).json({status: "Transaction created"})
      return
    }catch(error){
      console.error(error)
      response.status(400).json({status: error.message})
      return
    }
  }
  return response.status(405).json({ status: "Method not allowed" });
}
