import TransactionItem from "./TransactionItem/TransactionItem";

export default function TransactionList({ transactions }) {
  return (
    <ul>
      {transactions.map((transaction) => (
        <TransactionItem key={transaction._id} transaction={transaction} />
      ))}
    </ul>
  );
}
