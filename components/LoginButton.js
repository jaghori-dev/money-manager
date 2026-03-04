import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "./TransactionList/TransactionItem/TransactionItem";
import { LogOut, LogIn } from "lucide-react";
import styled from "styled-components";

const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export default function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <Button onClick={() => signOut()}>
          <ButtonContent>
            <LogOut size={16} />
            Sign out
          </ButtonContent>
        </Button>
      </>
    );
  }
  return (
    <>
      <Button onClick={() => signIn(undefined, { callbackUrl: "/" })}>
        <ButtonContent>
          <LogIn size={16} />
          Sign in
        </ButtonContent>
      </Button>
    </>
  );
}
