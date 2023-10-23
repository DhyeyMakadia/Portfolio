import "../styles/index.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { MainContextProvider } from "../context/main";
import Head from "next/head";
import { useRouter } from "next/router";
import { AdminRoutes } from "../utils/constants";
import { AdminPages } from "../HOC/AdminPages";
import { Loader } from "../components/Loader";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isAdminPage = AdminRoutes.includes(router.pathname);
  return (
    <QueryClientProvider client={queryClient}>
      <MainContextProvider>
        <Head>
          <title>Dhyey Makadia</title>
          <link rel="icon" href="/icon.svg" />
        </Head>
        <Loader />
        {isAdminPage ? (
          <AdminPages>
            <Component {...pageProps} />
          </AdminPages>
        ) : (
          <Component {...pageProps} />
        )}
      </MainContextProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
