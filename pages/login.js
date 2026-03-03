import { Container } from ".";
import LoginButton from "@/components/LoginButton";
import { useSession } from "next-auth/react";

export default function Login() {
  const session = useSession();
  return (
    <Container>
      {session.status === "unauthenticated" ? (
        <h3>Please login to see your transactions</h3>
      ) : (
        <h3>log out</h3>
      )}

      <LoginButton />
    </Container>
  );
}
