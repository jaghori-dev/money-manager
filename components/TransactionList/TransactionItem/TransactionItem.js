import styled from "styled-components";
import createGlobalStyle from "styled-components";
import { X } from "lucide-react";
import DeleteConfirmModal from "@/components/DeleteConfirmation";
import { useState } from "react";

export default function TransactionItem({
  transaction,
  isDetails = false,
  onEdit,
  onClick,
  onConfirm,
}) {
  const [showConfirm, setShowConfirm] = useState(false);
  const formattedDate = new Date(transaction.date).toLocaleDateString("de-DE", {
    weekday: "short",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const formattedAmount = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(transaction.amount);
  function toggleDeleteConfirm() {
    setShowConfirm((prev) => !prev);
  }
  return (
    <Card>
      <Row>
        <Title>{transaction.title}</Title>
        <Amount isIncome={transaction.amount >= 0}>{formattedAmount}</Amount>
      </Row>
      {isDetails && (
        <Details>
          <DeleteIcon onClick={toggleDeleteConfirm} />
          {showConfirm && (
            <DeleteConfirmModal
              onCancel={toggleDeleteConfirm}
              onConfirm={onConfirm}
            />
          )}
          <DetailsRow>
            <Category>{transaction.category}</Category>
            <StyledDate>{formattedDate}</StyledDate>
          </DetailsRow>
          <Button onClick={onClick}>{onEdit ? "Cancel" : "Edit"}</Button>
        </Details>
      )}
    </Card>
  );
}

const DeleteIcon = styled(X)`
  color: red;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  background-color: var(--text);
  border-radius: var(--radius-full);
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: var(--background);
  position: relative;
  color: var(--text);
  padding: 10px 20px;
  border: 1px solid var(--border);
  border-radius: 20px;
  box-shadow: 0 5px 5px var(--shadow);
  backdrop-filter: blur(20px);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 5px var(--shadow-color);
  }
`;

const Row = styled.div`
  margin: 5px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  opacity: 0.9;
`;

const DetailsRow = styled.div`
  margin-top: 0;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  opacity: 0.9;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  gap: 10px;
`;
const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  transition: color 0.3s ease;
`;

export const Button = styled.button`
  padding: 0.6rem 1.2rem;
  border-radius: var(--radius-s);
  border: none;
  cursor: pointer;
  margin: auto;
  background: rgba(255, 255, 255, 0.2);
  color: var(--text);
  font-weight: 600;
  backdrop-filter: blur(10px);

  transition: 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.35);
  }
`;

const Category = styled.span`
  font-weight: 500;
  font-size: 18px;
  color: var(--text);
`;

const StyledDate = styled.span`
  font-size: 13px;
  color: var(--text);
`;

const Amount = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: ${({ isIncome }) =>
    isIncome ? "var(--income-color)" : "var(--expenses-color)"};
  transition:
    color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
