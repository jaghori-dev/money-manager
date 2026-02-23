import TransactionList from "@/components/TransactionList/TransactionList";
import styled from "styled-components";

export default function HomePage({ transactions, error, isLoading }) {
  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <p>error</p>;
  if (!transactions) return <h1>somthing went wrong</h1>;
  return (
    <div>
      <h1>Money Manager App</h1>
      <TransactionList transactions={transactions} />
    </div>
  );
}
const Container = styled.div`
  background-color: black;
  padding: 10px;
`;
