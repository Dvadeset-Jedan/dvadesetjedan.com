import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/layout";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <Head>
          <title>Yirmibir</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    </QueryClientProvider>
  );
}

export default MyApp;
