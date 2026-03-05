import styled from "styled-components";

function formatCurrency(amount) {
  const formatted = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
  return formatted;
}
export default function Savings({ transactions }) {
  const savings = (transactions ?? []).filter(
    (transaction) => transaction.category === "Savings"
  );
  const savedMoney = (savings ?? []).reduce((sum, saving) => {
    const newSum = sum + saving.amount;
    return newSum;
  }, 0);

  return (
    <Card>
      <Row>
        <Title>Saved Money</Title>
        <Amount>{formatCurrency(savedMoney)}</Amount>
      </Row>
    </Card>
  );
}

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  transition: color 0.3s ease;
`;
const Amount = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: var(--income);
  transition:
    color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: var(--background);
  position: relative;
  color: var(--text);
  padding: 10px 20px;
  border-radius: 20px;
  box-shadow: 0 5px 5px var(--shadow);
  backdrop-filter: blur(90px);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 5px var(--shadow-color);
  }
`;
const Row = styled.div`
  margin: 5px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  opacity: 0.9;
`;
