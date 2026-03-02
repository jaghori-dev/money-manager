import GlobalStyle from "../styles";
import useSWR from "swr";
import Navigation from "@/components/Navigation/Navigation";
import { SessionProvider, useSession } from "next-auth/react";
import Login from "@/components/Login";
import { useRouter } from "next/router";
import ToggleTheme from "@/components/ToggleTheme";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const {
    data: transactions,
    error,
    isLoading,
  } = useSWR("/api/transactions", fetcher);
  const reversedTransactions = transactions?.slice().reverse();

  return (
    <SessionProvider session={session}>
      <GlobalStyle />
      <ProtectedRoute>
        <ToggleTheme />
        <Login />
        <Component
          {...pageProps}
          transactions={reversedTransactions}
          error={error}
          isLoading={isLoading}
        />
        <Navigation />
      </ProtectedRoute>
    </SessionProvider>
  );
}
//Component
function ProtectedRoute({ children }) {
  const session = useSession();
  console.log(session);
  const router = useRouter();
  if (session.status === "unauthenticated" && router.pathname !== "/login") {
    router.push("/login");
    return;
  }
  return children;
}
