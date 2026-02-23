import styled from "styled-components";
export default function TransactionForm({
  formTitle,
  amouuntDefaultValue,
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
          defaultValue={amouuntDefaultValue}
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
        <ButtonContainer>
          <RadioButton
            id="type-income"
            value="income"
            name="type"
            type="radio"
            required
            defaultChecked="income"
          />
          <StyledLabel htmlFor="type-income">income</StyledLabel>
          <RadioButton
            id="type-expense"
            value="expense"
            name="type"
            type="radio"
            required
            defaultChecked="expense"
          />
          <StyledLabel htmlFor="type-expense">expense</StyledLabel>
        </ButtonContainer>
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
  background: var(--surface);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  grid-column: 1 / -1;
`;
const RadioButton = styled.input`
  position: absolute;
  opacity: 0;
  width: 1px;
  height: 1px;
  margin: 0;
  pointer-events: none;
  cursor: pointer;
`;
const Input = styled.input`
  height: 45px;
  border-radius: 16px;
  padding: 10px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 22px;
  Label {
    padding: 6px 12px;
    border-radius: 25px;
  }
  input[type="radio"]:checked + Label {
    background: #d4eeff;
    color: #0f34a0;
    box-shadow: inset 0 0 0 1px #559aff;
  }
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
  border-radius: 12px;
`;
const Select = styled.select`
  padding: 10px 12px;
  border: 1px solid var(--border);
  border-radius: 16px;
`;
