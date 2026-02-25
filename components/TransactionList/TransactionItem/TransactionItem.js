import styled from "styled-components";
import createGlobalStyle from "styled-components";

export default function TransactionItem({ transaction }) {
  const formattedDate = new Date(transaction.date).toLocaleDateString("de-DE", {
    weekday: "short",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const formattedAmount = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(transaction.amount);

  return (
    <Card>
      <TopRow>
        <Category>{transaction.category}</Category>
        <StyledDate>{formattedDate}</StyledDate>
      </TopRow>

      <BottomRow>
        <Title>{transaction.title}</Title>
        <Amount isIncome={transaction.amount >= 0}>{formattedAmount}</Amount>
      </BottomRow>
    </Card>
  );
}

const Card = styled.li`
  background: var(--item-background);
  color: var(--text-color);
  padding: 10px 20px;
  border-radius: 20px;
  box-shadow: 0 10px 30px var(--shadow-color);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 35px var(--shadow-color);
  }
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  opacity: 0.9;
`;

const BottomRow = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-color);
  }
`;

const Category = styled.span`
  font-weight: 500;
  color: var(--primary-color);
`;

const StyledDate = styled.span`
  font-size: 13px;
  color: var(--primary-color);
`;

const Amount = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: ${({ isIncome }) =>
    isIncome ? "var(--income-color)" : "var(--expenses-color)"};
  transition:
    color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    color: var(--primary-color);
    transform: scale(1.1);
  }
`;
