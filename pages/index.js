import styled from "styled-components";

export default function HomePage({ transactions, error, isLoading }) {
  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <p>error</p>;
  if (!transactions) return <h1>somthing went wrong</h1>;
  console.log(transactions);
  return (
    <div>
      <h1>Money Manager App</h1>
      <ul>
        {transactions.map((transaction) => {
          return (
            <li key={transaction._id}>
              {transaction.title}
              <p>{transaction.category}</p>
              <p>{transaction.amount}</p>
              <p>{transaction.date}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
const Container = styled.div`
  background-color: black;
  padding: 10px;
`;
