import styled from "styled-components";
import TransactionsForm from "@/components/TransactionForm/TransactionsForm";
import useSWR from "swr";

export default function newTransaction() {
  const { mutate } = useSWR("/api/transactions");

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newTransaction = Object.fromEntries(formData);

    const response = await fetch("/api/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTransaction),
    });
    if (!response.ok) {
      console.error(response.status);
      return;
    }
    mutate();
    event.target.reset();
  }
  return (
    <Container>
      <TransactionsForm
        onSubmit={handleSubmit}
        formTitle="Add new transaction"
        buttonText="Save transaction"
      />
    </Container>
  );
}

const Container = styled.div`
  color: white;
`;
