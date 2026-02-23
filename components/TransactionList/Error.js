export default function Error({ message, onRetry }) {
  return (
    <Wrapper>
      <ErrorCard>
        <Icon>❌</Icon>
        <Message>
          {message || "Unable to load data😿 Please try again."}
        </Message>
        <RetryButton onClick={onRetry}>🔃 Try again</RetryButton>
      </ErrorCard>
    </Wrapper>
  );
}

import styled from "styled-components";

const Wrapper = styled.div`
  background-color: var(--text-color);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 120px;
`;

const ErrorCard = styled.div`
  background: var(--error-background-color);
  color: var(--main-color);
  padding: 40px 50px;
  border-radius: 16px;
  text-align: center;
  max-width: 400px;
  width: 100%;
`;

const Icon = styled.span`
  font-size: 48px;
  display: block;
  margin-bottom: 20px;
`;

const Message = styled.p`
  margin-bottom: 24px;
  font-size: 16px;
  color: var(--error-text-color);
`;

const RetryButton = styled.button`
  background: var(--error-button-color);
  color: var(--main-color);

  border: none;
  padding: 10px 18px;
  border-radius: 8px;

  cursor: pointer;
  font-size: 14px;

  transition: all 0.2s ease;

  &:hover {
    background: var(--error-hover-button-color);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;
