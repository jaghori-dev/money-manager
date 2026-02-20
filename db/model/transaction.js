import mongoose from "mongoose";
const { Schema } = mongoose;

const transactionSchema = new Schema({
  title: String,
  amount: Number,
  catagory: String,
  date: Date,
});

const Transaction =
  mongoose.model.Transaction ||
  mongoose.model("Transaction", transactionSchema, "transactions");
export default Transaction;
