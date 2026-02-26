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
          <Row>
            <Title>{transaction.category}</Title>
            <StyledDate>{formattedDate}</StyledDate>
          </Row>
          {transaction.receiptUrl ? (
            <ReceiptImage src={transaction.receiptUrl} alt="Receipt image" />
          ) : (
            <NoReceiptText>No receipt attached</NoReceiptText>
          )}
          <Button onClick={onClick}>{onEdit ? "Cancel" : "Edit"}</Button>
        </Details>
      )}
    </Card>
  );
}

const DeleteIcon = styled(X)`
  color: red;
  padding: px;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  background-color: white;
  border-radius: var(--radius-full);
`;
const Card = styled.div`
  background: var(--item-background);
  color: var(--text-color);
  padding: 20px;
  position: relative;
  border-radius: var(--radius-m);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 10px var(--shadow-color);
  }
`;

const Row = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  opacity: 0.9;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;
const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  transition: color 0.3s ease;
  &:hover {
    color: var(--primary-color);
  }
`;
const Button = styled.button`
  padding: 10px 20px;
  border-radius: var(--radius-s);
  border: none;
  min-width: 60px;
  margin: auto;
  cursor: pointer;
`;
const StyledDate = styled.span`
  font-size: 13px;
  color: var(--primary-color);
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
    color: var(--primary-color);
    transform: scale(1.1);
  }
`;
const ReceiptImage = styled.img`
  display: block;
  width: 200px;
  height: 400px;
  object-fit: cover;
  margin: 12px auto;
  border-radius: var(--radius-s);
`;

const NoReceiptText = styled.p`
  text-align: center;
  margin-top: 12px;
  color: var(--second-text-color);
`;
