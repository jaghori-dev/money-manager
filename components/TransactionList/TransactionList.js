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
  function getDateLabel(date) {
    const transactionDate = new Date(date);
    const today = new Date();
    const yesterday = new Date();

    yesterday.setDate(today.getDate() - 1);

    if (transactionDate.toDateString() === today.toDateString()) {
      return "Today";
    }

    if (transactionDate.toDateString() === yesterday.toDateString()) {
      return "Yesterday";
    }

    return transactionDate.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }
  const sorted = [...transactions].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const groupedTransactions = sorted.reduce((groups, transaction) => {
    const label = getDateLabel(transaction.date);

    if (!groups[label]) {
      groups[label] = [];
    }

    groups[label].push(transaction);

    return groups;
  }, {});

  return (
    <>
      {Object.entries(groupedTransactions).map(([date, items]) => (
        <StyledList key={date}>
          <StyledH>{date}</StyledH>
          {items.map((transaction) => (
            <StyledLink key={transaction._id} href={transaction._id}>
              <TransactionItem
                key={transaction._id}
                transaction={transaction}
              />
            </StyledLink>
          ))}
        </StyledList>
      ))}
    </>
  );
}

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
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
const StyledH = styled.h4`
  text-align: left;
  margin:10px;
  
`;
