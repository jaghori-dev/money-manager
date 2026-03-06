import GlobalStyle from "../styles";
import useSWR from "swr";
import Navigation from "@/components/Navigation/Navigation";
import { SessionProvider } from "next-auth/react";
import Login from "@/components/LoginButton";
import ProtectedRoute from "@/components/ProtectedRoute";

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
  const transactionsData = Array.isArray(transactions) ? transactions : [];
  return (
    <SessionProvider session={session}>
      <GlobalStyle />
      <ProtectedRoute>
        <Component
          {...pageProps}
          transactions={transactionsData}
          error={error}
          isLoading={isLoading}
        />
        <Navigation />
      </ProtectedRoute>
    </SessionProvider>
  );
}
