import styled from "styled-components";

export default function TotalBalance({ transactions }) {
  function formatCurrency(amount) {
    const formatted = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
    return formatted;
  }

  function getBalanceType(value) {
    if (value > 0) return "positive";
    if (value < 0) return "negative";
    return "neutral";
  }
  const filteredTransaction = (transactions ?? []).filter(
    (transaction) => transaction.category !== "Savings"
  );
  const balance = filteredTransaction.reduce((sum, transaction) => {
    const newSum = sum + transaction.amount;
    return newSum;
  }, 0);

  const balanceType = getBalanceType(balance);

  return (
    <BalanceCard balanceType={balanceType}>
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
  box-shadow: var(--balance-shadow);

  background: ${function (props) {
    const balanceType = props.balanceType;
    if (balanceType === "positive") return "var(--background)";
    if (balanceType === "negative") return "var(--balance-negative)";
    return "var(--balance-primary)";
  }};
`;

const BalanceLabel = styled.p`
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0 0 12px 0;
  opacity: 0.9;
  color: var(--text);
`;

const BalanceValue = styled.div`
  font-size: 42px;
  font-weight: bold;
  color: var(--text);
  text-shadow: 0 2px 4px var(--card);

  @media (max-width: 600px) {
    font-size: 32px;
  }
`;
