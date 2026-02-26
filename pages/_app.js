import GlobalStyle from "../styles";
import useSWR from "swr";
import Navigation from "@/components/Navigation/Navigation";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const {
    data: transactions,
    error,
    isLoading,
  } = useSWR("/api/transactions", fetcher);
  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        transactions={transactions}
        error={error}
        isLoading={isLoading}
      />
      <Navigation/>
    </>
  );
}
