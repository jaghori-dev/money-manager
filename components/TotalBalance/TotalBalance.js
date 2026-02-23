import styled from "styled-components";

export default function TotalBalance({ transactions }) {
  function formatCurrency(amount) {
    const formatted = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);

    console.log("formatCurrency check:", { amount, formatted });
    return formatted;
  }

  if (!transactions || transactions.length === 0) {
    return (
      <BalanceCard>
        <BalanceLabel>Total Balance</BalanceLabel>
        <BalanceValue>0</BalanceValue>
      </BalanceCard>
    );
  }

  const balance = transactions.reduce((sum, transaction) => {
    const newSum = sum + transaction.amount;
    console.log("New sum:", newSum);
    return newSum;
  }, 0);

  console.log("balance:", balance);

  return (
    <BalanceCard>
      <BalanceLabel>Total Balance</BalanceLabel>
      <BalanceValue>{formatCurrency(balance)}</BalanceValue>
    </BalanceCard>
  );
}

const BalanceCard = styled.div`
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 30px;
  text-align: center;
`;

const BalanceLabel = styled.p`
  margin: 0 0 12px 0;
`;

const BalanceValue = styled.div`
  font-size: 42px;
  font-weight: bold;
`;
