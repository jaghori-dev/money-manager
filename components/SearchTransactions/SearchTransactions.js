import styled from "styled-components";

export default function SearchTransactions({ search, setSearch }) {
  return (
    <InputWrapper>
      <StyledInput
        type="text"
        name="search"
        placeholder="Search transactions..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search && (
        <ClearButton type="button" onClick={() => setSearch("")}>
          ✖
        </ClearButton>
      )}
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 10px;
`;

const StyledInput = styled.input`
  background: var(--shadow-color);
  color: var(--error-text-color);
  border-radius: 30px;
  border: 1px solid var(--shadow-color);
  padding: 10px 36px 10px 14px;
  outline: none;
  font-size: 14px;
  transition: all 0.2s ease;
  width: 100%;
  &:hover {
    border-color: var(--search-focus-shadow);
  }
  &:focus {
    background: var(--search-focus-bg);
    border-color: var(--search-focus-shadow);
  }
`;

const ClearButton = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--error-text-color);
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;
