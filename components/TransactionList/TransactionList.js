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
    width: 10px;
    height: 10px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 12px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--background);
    backdrop-filter: blur(6px);
    border-radius: 12px;
    border: 2px solid transparent;
    background-clip: padding-box;
    transition: all 0.3s ease;
  }
  &::-webkit-scrollbar-thumb:active {
    background: var(--scroll-bar-background);
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
