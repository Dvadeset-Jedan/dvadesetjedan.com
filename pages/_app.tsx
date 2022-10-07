import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/layout";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>DvadesetJedan</title>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
