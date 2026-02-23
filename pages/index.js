import TransactionList from "@/components/TransactionList/TransactionList";
import TotalBalance from "@/components/TotalBalance/TotalBalance";
import styled from "styled-components";

export default function HomePage({ transactions, error, isLoading }) {
  console.log("HomePage render", { transactions, error, isLoading });

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <p>error</p>;
  if (!transactions) return <h1>somthing went wrong</h1>;

  return (
    <Container>
      <Title>Money Manager App</Title>

      <TotalBalance transactions={transactions} />

      <TransactionList transactions={transactions} />
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  background-color: var(--background-color);
  padding: 40px 20px;
  color: white;
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
