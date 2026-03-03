import GlobalStyle from "../styles";
import useSWR from "swr";
import Navigation from "@/components/Navigation/Navigation";
import { SessionProvider } from "next-auth/react";
import Login from "@/components/Login";
import ProtectedRoute from "@/components/ProtectedRoute";
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


  return (
    <SessionProvider session={session}>
      <GlobalStyle />
      <ProtectedRoute>
        <ToggleTheme />
        <Login />
        <Component
          {...pageProps}
          transactions={transactions}
          error={error}
          isLoading={isLoading}
        />
        <Navigation />
      </ProtectedRoute>
    </SessionProvider>
  );
}

