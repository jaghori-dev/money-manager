import styled from "styled-components";
import { useRouter } from "next/router";
import TransactionItem from "@/components/TransactionList/TransactionItem/TransactionItem";
import useSWR, { mutate } from "swr";
import TransactionForm from "@/components/TransactionForm/TransactionsForm";
import { useState } from "react";

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

  if (!id) return <h1>Loading...</h1>;
  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <p>Error loading transaction</p>;
  if (!transaction) return <h2>transaction not found</h2>;

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
    <div>
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
        />
      )}
    </div>
  );
}
