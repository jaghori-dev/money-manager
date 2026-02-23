import styled from "styled-components";

export default function TotalBalance({ transactions }) {
  // falls keine transaktionen stehen zu ferfügung Balans wird auf 0 gezeigt
  if (!transactions || transactions.length === 0) {
    return (
      <BalanceCard>
        <BalanceLabel>Total Balance</BalanceLabel>
        <BalanceValue>0</BalanceValue>
      </BalanceCard>
    );
  }

  // ausrechnung gesamt summe
  const balance = transactions.reduce((sum, transaction) => {
    console.log("reduce:", { sum, transactionAmount: transaction.amount });
    return sum + transaction.amount;
  }, 0);

  console.log("balance:", balance);

  return (
    <BalanceCard>
      <BalanceLabel>Total Balance</BalanceLabel>
      <BalanceValue>{balance}</BalanceValue>
    </BalanceCard>
  );
}

const BalanceCard = styled.div`
  text-align: center;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 30px;
`;

const BalanceLabel = styled.p`
  margin: 0 0 12px 0;
`;

const BalanceValue = styled.div`
  font-size: 42px;
  font-weight: bold;
`;
