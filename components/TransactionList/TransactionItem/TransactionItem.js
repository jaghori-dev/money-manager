export default function TransactionItem({ transaction }) {
  return (
    <li>
      <strong>{transaction.title}</strong>
      <p>Category: {transaction.category}</p>
      <p>Amount: {transaction.amount}</p>
      <p>Date: {new Date(transaction.date).toLocaleDateString()}</p>
    </li>
  );
}
