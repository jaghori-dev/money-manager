export default function TransactionItem({ transaction }) {
  const formattedDate = new Date(transaction.date).toLocaleDateString("de-DE", {
    weekday: "short",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <li>
      <p>{transaction.category}</p>
      <strong>{transaction.title}</strong>
      <p>{transaction.amount}</p>
      <p>{formattedDate}</p>
    </li>
  );
}
