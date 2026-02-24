import styled from "styled-components";
import { useRouter } from "next/router";
import TransactionItem from "@/components/TransactionList/TransactionItem/TransactionItem";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function Details() {
  const router = useRouter();
  const { id } = router.query;
  if (!id) return <h1>Loading...</h1>;

  const {
    data: transaction,
    error,
    isLoading,
  } = useSWR(`/api/transactions/${id}`, fetcher);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (!transaction) return <h2>transaction not found</h2>;


  return <TransactionItem transaction={transaction} isDetails={true} />;
}
