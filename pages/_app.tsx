import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/layout";
import Head from "next/head";
import { FC, PropsWithChildren } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>DvadesetJedan</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
