import styled from "styled-components";
import useSWR from "swr";
import { useState } from "react";
import { Container } from "@/pages";
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

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <p>error</p>;
  if (!categories) return <h1>somthing went wrong</h1>;

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit(event, receiptFile);
  }

  return (
    <Container>
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
    </Container>
  );
}

const Input = styled.input`
  height: 45px;
  border-radius: var(--radius-l);
  padding: 10px;
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
  color: var(--second-text-color);
`;
export const StyledLabel = styled.label`
  display: flex;
  justify-content: space-between;
  gap: 5px;
`;
export const Button = styled.button`
  padding: 0.6rem 1.2rem;
  border-radius: var(--radius-s);
  border: none;
  cursor: pointer;
  margin: auto;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  backdrop-filter: blur(10px);

  transition: 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.35);
  }
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
