import styled from "styled-components";
import { Search } from "lucide-react";
import Error from "next/error";

export default function SearchTransactions({ search, setSearch }) {
  return (
    <InputWrapper>
      <SearchIcon size={20} />
      <StyledInput
        type="search"
        placeholder="Search..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      {search && <ClearButton onClick={() => setSearch("")}>✕</ClearButton>}
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 10px;
`;

const SearchIcon = styled(Search)`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--error-text-color);
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px 40px 10px 40px;
  border-radius: 30px;
  border: 1px solid var(--shadow-color);
  background: var(--shadow-color);
  color: var(--error-text-color);
  outline: none;

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
`;

const ClearButton = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 14px;
  color: var(--error-text-color);
`;
