import styled from "styled-components";
export default function TransactionForm({
  formTitle,
  amouuntDefaultValue,
  buttonText,
  onSubmit
}) {
  return (
    <FormWrapper>
      <StyledForm onSubmit={onSubmit}>
        <StyledHeading>{formTitle}</StyledHeading>
        <StyledLabel htmlFor="title">Transaction Name:</StyledLabel>
        <input type="text" name="title" id="title" />
        <StyledLabel htmlFor="amount">Amount:</StyledLabel>
        <input
          type="number"
          id="amount"
          name="amount"
          defaultValue={amouuntDefaultValue}
        />

        <select id="category" name="category" defaultValue="category" required>
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
        </select>
        <StyledLabel htmlFor="date">Date:</StyledLabel>
        <input type="date" name="date" id="date" />

        <button>{buttonText}</button>
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
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 80%;
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
