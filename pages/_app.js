import GlobalStyle from "../styles";
import useSWR from "swr";
import Navigation from "@/components/Navigation/Navigation";
import { SessionProvider } from "next-auth/react";
import Login from "@/components/Login";

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
      <Login />
      <Component
        {...pageProps}
        transactions={reversedTransactions}
        error={error}
        isLoading={isLoading}
      />
      <Navigation />
    </SessionProvider>
  );
}
