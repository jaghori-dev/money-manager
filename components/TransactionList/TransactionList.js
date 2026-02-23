import TransactionItem from "./TransactionItem/TransactionItem";
import styled from "styled-components";

export default function TransactionList({ transactions }) {
  return (
    <StyledList>
      {transactions.map((transaction) => (
        <TransactionItem key={transaction._id} transaction={transaction} />
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: 70vh;
  overflow-y: auto;
`;
