import TransactionList from "@/components/TransactionList/TransactionList";
import TotalBalance from "@/components/TotalBalance/TotalBalance";
import Error from "@/components/Error";
import Loading from "@/components/Loading";
import styled from "styled-components";
import SearchTransactions from "@/components/SearchTransactions/SearchTransactions";
import { useState, useMemo } from "react";
import Navigation from "@/components/Navigation/Navigation";

export default function HomePage({ transactions, error, isLoading }) {
  const [search, setSearch] = useState("");

  const filteredTransactions = useMemo(() => {
    if (!transactions) return [];

    return transactions.filter((transaction) =>
      transaction.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [transactions, search]);

  if (isLoading) return <Loading />;
  if (error) {
    return (
      <Error
        message="Unable to load data😿 Please try again."
        onRetry={() => window.location.reload()}
      />
    );
  }

  return (
    <Container>
      <Title>Money Manager App</Title>
      <TotalBalance transactions={transactions} />
      <SearchTransactions search={search} setSearch={setSearch} />
      <TransactionList transactions={filteredTransactions} />
      <Navigation />
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  background-color: var(--background-color);
  padding: 10px;
  color: var(--main-color);
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: 20px 10px;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 30px;

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;
