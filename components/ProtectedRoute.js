import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function ProtectedRoute({ children }) {
  const session = useSession();

  const router = useRouter();
  if (session.status === "unauthenticated" && router.pathname !== "/login") {
    router.push("/login");
    return;
  }
  return children;
}
