import styled from "styled-components";

export default function DeleteConfirmModal({ onConfirm, onCancel }) {
  return (
    <Overlay>
      <Modal>
        <p>Are you sure you want to delete this transaction?</p>
        <ButtonGroup>
          <Button onClick={onCancel}>Cancel</Button>
          <DeleteButton onClick={onConfirm}>Delete</DeleteButton>
        </ButtonGroup>
      </Modal>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  backdrop-filter: blur(25px);
  background: var(--background);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 500;
`;

const Modal = styled.div`
  width: 70%;
  padding: 10px;
  border-radius: 20px;
  position: absolute;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);

  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

  color: white;
  text-align: center;
`;

const ButtonGroup = styled.div`
  margin-top: 1.8rem;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 0.6rem 1.2rem;
  border-radius: var(--radius-s);
  border: none;
  cursor: pointer;

  background: rgba(255, 255, 255, 0.2);
  color: white;
  backdrop-filter: blur(10px);

  transition: 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.35);
  }
`;

const DeleteButton = styled.button`
  padding: 0.6rem 1.2rem;
  border-radius: var(--radius-s);
  border: none;
  cursor: pointer;

  background: rgba(255, 0, 0, 0.6);
  color: white;

  transition: 0.2s ease;

  &:hover {
    background: rgba(255, 0, 0, 0.8);
  }
`;
