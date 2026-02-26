import styled from "styled-components";
import useSWR from "swr";
import ReceiptInput from "../ReceiptInput/ReceiptInput";
import { useState } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());
const today = new Date().toISOString().split("T")[0];

export default function TransactionForm({
  formTitle,
  defaultValues,
  buttonText,
  onSubmit,
}) {
  const [receiptFile, setReceiptFile] = useState(null);

  const {
    data: categories,
    error,
    isLoading,
  } = useSWR("/api/categories", fetcher);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <p>error</p>;
  if (!categories) return <h1>somthing went wrong</h1>;

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit(event, receiptFile);
  }

  return (
    <FormWrapper>
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
          defaultValue={defaultValues?.amount}
        />
        <Select id="category" name="category" defaultValue="category" required>
          {categories.map((category) => {
            return (
              <option key={category._id} value={category.category}>
                {category.category}
              </option>
            );
          })}
        </Select>
        <StyledLabel htmlFor="date">Date:</StyledLabel>
        <Input
          type="date"
          name="date"
          id="date"
          defaultValue={
            defaultValues?.date ? new Date().toISOString().split("T")[0] : today
          }
        />
        <ReceiptInput onFileSelect={setReceiptFile} />
        <Button>{buttonText}</Button>
      </StyledForm>
    </FormWrapper>
  );
}
const FormWrapper = styled.div`
  padding: 0 24px;
  max-width: 650px;
  margin: 45px auto 0;
  background: var(--background-color);
  box-shadow: var(--shadow-color);
  border-radius: var(--radius-m);
`;

const Input = styled.input`
  height: 45px;
  border-radius: var(--radius-l);
  padding: 10px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 80%;
  margin: auto;
  color: var(--main-color);
`;
export const StyledHeading = styled.h2`
  text-align: center;
  color: var(--second-text-color);
`;
export const StyledLabel = styled.label`
  display: flex;
  justify-content: space-between;
  gap: 5px;
`;
const Button = styled.button`
  margin: auto;
  padding: 10px;
  border-radius: var(--radius-s);
`;
const Select = styled.select`
  padding: 10px 12px;
  border: 1px solid var(--border);
  border-radius: var(--radius-s);
`;
