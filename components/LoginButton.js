import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "./TransactionList/TransactionItem/TransactionItem";

export default function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <Button onClick={() => signOut()}>Sign out</Button>
      </>
    );
  }
  return (
    <>
      <Button onClick={() => signIn(undefined, { callbackUrl: "/" })}>
        Sign in
      </Button>
    </>
  );
}
