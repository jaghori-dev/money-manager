import mongoose from "mongoose";
const { Schema } = mongoose;

const transactionSchema = new Schema(
  {
    title: { type: String, required: true },
    amount: { type: Number, required: true },
    category: { type: String },
    date: { type: Date, default: Date.now },
    receiptUrl: { type: String, default: "" },
  },
  { timestamps: true }
);

const Transaction =
  mongoose.models.Transaction ||
  mongoose.model("Transaction", transactionSchema, "transactions");
export default Transaction;
