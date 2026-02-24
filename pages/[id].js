import styled from "styled-components";
import { useRouter } from "next/router";
import TransactionItem from "@/components/TransactionList/TransactionItem/TransactionItem";
export default function Details() {
  const router = useRouter();
  const { id } = router.query;
  if (!id) return <h1>Loading...</h1>;
  console.log(id);
  return <Title>this is dynamic page</Title>;
}

const Title = styled.h1`
  color: var(--main-color);
`;
