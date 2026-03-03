import { useRouter } from "next/router";
import TransactionItem from "@/components/TransactionList/TransactionItem/TransactionItem";
import useSWR, { mutate } from "swr";
import TransactionForm from "@/components/TransactionForm/TransactionsForm";
import { useState } from "react";
import { Container } from ".";
import Loading from "@/components/Loading";
import Error from "@/components/Error";

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function Details() {
  const [onEdit, setOnEdit] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const {
    data: transaction,
    error,
    isLoading,
  } = useSWR(id ? `/api/transactions/${id}` : null, fetcher);

  if (!id) return <Loading />;
  if (isLoading) return <Loading />;
  if (error) return <Error />;
  if (!transaction) return <h2>Transaction not found</h2>;

  function toggleEdit() {
    setOnEdit((prev) => !prev);
  }
  async function handleUpdate(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updateTransaction = Object.fromEntries(formData);
    const response = await fetch(`/api/transactions/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateTransaction),
    });
    if (response.ok) {
      mutate(`/api/transactions/${id}`);
    }
    setOnEdit((prev) => !prev);
  }
  async function handleDelete() {
    const response = await fetch(`/api/transactions/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      await mutate("/api/transactions");
      router.push("/");
    }
  }
  return (
    <Container>
      <TransactionItem
        transaction={transaction}
        isDetails={true}
        onClick={toggleEdit}
        onEdit={onEdit}
        onConfirm={handleDelete}
      >
        hello
      </TransactionItem>
      {onEdit && (
        <TransactionForm
          defaultValues={transaction}
          buttonText="Update transaction"
          onSubmit={handleUpdate}
          formTitle="Edit transaction"
        />
      )}
    </Container>
  );
}
