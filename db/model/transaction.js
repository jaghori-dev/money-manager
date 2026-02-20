import mongoose from "mongoose";
const { Schema } = mongoose;

const transactionSchema = new Schema({
  title: String,
  amount: String,
  catagory: String,
  date: Number,
});

const transaction =
  mongoose.model.transaction ||
  mongoose.model("transaction", transactionSchema, "transactions");
export default transaction;
