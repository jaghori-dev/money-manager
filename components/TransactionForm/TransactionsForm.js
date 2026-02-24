import styled from "styled-components";
export default function TransactionForm({
  formTitle,
  amountDefaultValue,
  buttonText,
  onSubmit,
}) {
  return (
    <FormWrapper>
      <StyledForm onSubmit={onSubmit}>
        <StyledHeading>{formTitle}</StyledHeading>
        <StyledLabel htmlFor="title">Transaction Name:</StyledLabel>
        <Input type="text" name="title" id="title" />
        <StyledLabel htmlFor="amount">Amount:</StyledLabel>
        <Input
          type="number"
          id="amount"
          name="amount"
          defaultValue={amountDefaultValue}
        />
        <Select id="category" name="category" defaultValue="category" required>
          <option value="Education">Education</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Groceries">Groceries</option>
          <option value="Health">Health</option>
          <option value="Insurance">Insurance</option>
          <option value="Miscellaneous">Miscellaneous</option>
          <option value="Rent">Rent</option>
          <option value="Restaurants">Restaurants</option>
          <option value="Salary">Salary</option>
          <option value="Savings">Savings</option>
          <option value="Transportation">Transportation</option>
          <option value="Utilities">Utilities</option>
        </Select>
        <StyledLabel htmlFor="date">Date:</StyledLabel>
        <Input type="date" name="date" id="date" defaultValue="" />

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
