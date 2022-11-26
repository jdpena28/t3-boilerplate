import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo title="T3 Boilerplate" description="T3 Boilerplate" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
