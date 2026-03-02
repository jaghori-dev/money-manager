import GlobalStyle from "../styles";
import useSWR from "swr";
import Navigation from "@/components/Navigation/Navigation";
import ToggleTheme from "@/components/ToggleTheme";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const {
    data: transactions,
    error,
    isLoading,
  } = useSWR("/api/transactions", fetcher);
  const reversedTransactions = transactions?.slice().reverse();

  return (
    <>
      <GlobalStyle />
      <ToggleTheme />
      <Component
        {...pageProps}
        transactions={reversedTransactions}
        error={error}
        isLoading={isLoading}
      />
      <Navigation />
    </>
  );
}
