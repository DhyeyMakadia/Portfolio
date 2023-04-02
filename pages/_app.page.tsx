import "../styles/index.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { MainContextProvider } from '../context/main'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <MainContextProvider>
        <Component {...pageProps} />
      </MainContextProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
