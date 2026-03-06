import styled from "styled-components";
import useSWR from "swr";
import { useState } from "react";
import { Button } from "../TransactionList/TransactionItem/TransactionItem";
import Loading from "../Loading";
import Error from "../Error";

const fetcher = (url) => fetch(url).then((res) => res.json());
const today = new Date().toISOString().split("T")[0];

export default function TransactionForm({
  formTitle,
  defaultValues,
  buttonText,
  onSubmit,
  receiptErrorMessage,
}) {
  const [receiptFile, setReceiptFile] = useState(null);
  const {
    data: categories,
    error,
    isLoading,
  } = useSWR("/api/categories", fetcher);

  const date = defaultValues?.date
    ? new Date(defaultValues.date).toISOString().split("T")[0]
    : today;

  if (isLoading) return <Loading />;
  if (error) return <Error />;
  if (!categories) return <h1>something went wrong</h1>;

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(event, receiptFile);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledHeading>{formTitle}</StyledHeading>
      <StyledLabel htmlFor="title">Transaction Name:</StyledLabel>
      <Input
        type="text"
        name="title"
        id="title"
        defaultValue={defaultValues?.title}
      />
      <StyledLabel htmlFor="amount">Amount:</StyledLabel>
      <Input
        type="number"
        id="amount"
        name="amount"
        step="0.01"
        inputMode="decimal"
        defaultValue={defaultValues?.amount}
      />
      <Select
        id="category"
        name="category"
        defaultValue={defaultValues?.category}
        required
      >
        {categories.map((category) => {
          return (
            <option key={category._id} value={category.category}>
              {category.category}
            </option>
          );
        })}
      </Select>
      <StyledLabel htmlFor="date">Date:</StyledLabel>
      <Input type="date" name="date" id="date" defaultValue={date} />
      <StyledLabel htmlFor="receipt">Attach receipt:</StyledLabel>
      {receiptErrorMessage ? (
        <ReceiptErrorMessage>{receiptErrorMessage}</ReceiptErrorMessage>
      ) : null}
      <Input
        id="receipt"
        name="receipt"
        type="file"
        accept="image/*"
        onChange={function (event) {
          const selectedFile = event.target.files[0];

          if (selectedFile) {
            setReceiptFile(selectedFile);
          } else {
            setReceiptFile(null);
          }
        }}
      />
      <Button>{buttonText}</Button>
    </StyledForm>
  );
}

const Input = styled.input`
  height: 45px;
  border: none;
  border-radius: var(--radius-l);
  padding: 10px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    transform: translateY(-1px);
  }
  &:active {
    transform: scale(0.98);
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 80%;
  margin: auto;
  color: var(--text);
`;
export const StyledHeading = styled.h2`
  text-align: center;
  color: var(--text);
`;
export const StyledLabel = styled.label`
  display: flex;
  justify-content: space-between;
  gap: 5px;
`;

const Select = styled.select`
  padding: 10px 12px;
  border: 1px solid var(--border);
  border-radius: var(--radius-s);
`;
const ReceiptErrorMessage = styled.p`
  margin: 6px 0 0 0;
  font-size: 0.9rem;
  color: #d93025;
`;
