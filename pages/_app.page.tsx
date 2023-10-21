import "../styles/index.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { MainContextProvider } from "../context/main";
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { SocialMedia } from "../components/SocialMedia";
import { Footer } from "../components/Footer";
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
        {isAdminPage ? (
          <AdminPages>
            <Component {...pageProps} />
          </AdminPages>
        ) : (
          <>
            <Loader />
            <Navbar />
            <SocialMedia />
            <div id="main-container">
              <div className="container flex flex-col !min-h-screen">
                <Component {...pageProps} />
                <div className="grow"></div>
                <Footer />
              </div>
            </div>
          </>
        )}
      </MainContextProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
