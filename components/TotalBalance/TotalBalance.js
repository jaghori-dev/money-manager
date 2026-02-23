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

  const balance = (transactions ?? []).reduce((sum, transaction) => {
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
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  background: ${function (props) {
    const balanceType = props.balanceType;
    if (balanceType === "positive")
      return "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)";
    if (balanceType === "negative")
      return "linear-gradient(135deg, #eb3349 0%, #f45c43 100%)";
    return "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
  }};
`;

const BalanceLabel = styled.p`
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0 0 12px 0;
  opacity: 0.9;
  color: white;
`;

const BalanceValue = styled.div`
  font-size: 42px;
  font-weight: bold;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    font-size: 32px;
  }
`;
