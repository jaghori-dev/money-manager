import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "./TransactionList/TransactionItem/TransactionItem";

export default function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        {/* Signed in as {session.user.email} <br /> */}
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
