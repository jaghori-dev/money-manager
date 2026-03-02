import styled from "styled-components";

export default function Loading() {
  return (
    <LoadingWrapper>
      <Loader></Loader>
      <Message>Loading...</Message>
    </LoadingWrapper>
  );
}

const LoadingWrapper = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  margin-top: 50px;
  font-size: 12px;
`;

const Loader = styled.div`
  position: relative;
  width: 64px;
  height: 64px;
  transform: rotate(45deg);
  overflow: hidden;
  background: var(--card);
  border-radius: var(--radius-s);
  border: 1px solid var(--border);
  margin-bottom: 20px;
  &:after {
    content: "";
    position: absolute;
    inset: 8px;
    background: var(--background);
    border-radius: 8px;
  }

  &:before {
    content: "";
    position: absolute;
    inset: -15px;
    background: var(--loading-color);
    animation: diamondLoader 2s linear infinite;
  }

  @keyframes diamondLoader {
    0%,
    10% {
      transform: translate(-64px, -64px) rotate(-45deg);
    }
    90%,
    100% {
      transform: translate(0, 0) rotate(-45deg);
    }
  }
`;

const Message = styled.h1`
  margin-top: 20px;
  font-size: 18px;
  font-weight: 500;
  color: var(--text);
  opacity: 0.8;
`;
