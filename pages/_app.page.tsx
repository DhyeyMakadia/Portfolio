import "../styles/index.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { MainContext, MainContextProvider } from "../context/main";
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { SocialMedia } from "../components/SocialMedia";
import { Footer } from "../components/Footer";
import { useRouter } from "next/router";
import { useContext } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isAdminPage = router.pathname.includes("admin");
  return (
    <QueryClientProvider client={queryClient}>
      <MainContextProvider>
        <Head>
          <title>Dhyey Makadia</title>
          <link rel="icon" href="/icon.svg" />
        </Head>
        {!isAdminPage && (
          <>
            <Navbar />
            <SocialMedia />
          </>
        )}
        {isAdminPage ? (
          <Component {...pageProps} />
        ) : (
          <div id="main-container">
            <div className="container flex flex-col !min-h-screen">
              <Component {...pageProps} />
              <div className="grow"></div>
              <Footer />
            </div>
          </div>
        )}
      </MainContextProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
