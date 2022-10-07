import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="sr">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
