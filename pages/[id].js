import styled from "styled-components";
import { useRouter } from "next/router";
import TransactionItem from "@/components/TransactionList/TransactionItem/TransactionItem";
import useSWR from "swr";
import TransactionForm from "@/components/TransactionForm/TransactionsForm";
import { useState } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function Details() {
  const [isEdit, setIsEdit] = useState(false);
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

  console.log(transaction);
  function handleDelet(event) {
    event.preventDefault();
    setIsEdit((prev) => !prev);
  }
  return (
    <div>
      <TransactionItem
        transaction={transaction}
        isDetails={true}
        onClick={handleDelet}
        isEdit={isEdit}
      >
        hello
      </TransactionItem>
      {isEdit && (
        <TransactionForm
          defaultValues={transaction}
          buttonText="Update transaction"
          onSubmit={handleDelet}
        />
      )}
    </div>
  );
}

