import styled from "styled-components";

export default function Loading() {
  return (
    <LoadingWrapper>
      <Loader></Loader>
      <Message>Loading...</Message>;
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
`;

const Loader = styled.div`
  position: relative;
  width: 64px;
  height: 64px;
  background-color: var(--background);
  transform: rotate(45deg);
  overflow: hidden;
  &:after {
    content: "";
    position: absolute;
    inset: 8px;
    margin: auto;
    background: var(--background-color);
  }
  &:before {
    content: "";
    position: absolute;
    inset: -15px;
    margin: auto;
    background: var(--item-background);
    animation: diamondLoader 2s linear infinite;
  }
  @keyframes diamondLoader {
    0%,
    10% {
      transform: translate(-64px, -64px) rotate(-45deg);
    }
    90%,
    100% {
      transform: translate(0px, 0px) rotate(-45deg);
    }
  }
`;

const Message = styled.h1`
  color: var(--error-text-color);
`;
