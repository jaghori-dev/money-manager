import TransactionItem from "./TransactionItem/TransactionItem";
import styled from "styled-components";
import Link from "next/link";

export default function TransactionList({
  transactions,
  emptyMessage = "No transactions found",
}) {
  if (!transactions || transactions.length === 0) {
    return <h2>{emptyMessage}</h2>;
  }
  return (
    <StyledList>
      {transactions.map((transaction) => (
        <StyledLink key={transaction._id} href={transaction._id}>
          <TransactionItem key={transaction._id} transaction={transaction} />
        </StyledLink>
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
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: var(--scroll-bar-background);
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--item-background);
    border-radius: 4px;
    border: 2px solid var(--scroll-bar-background);
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
