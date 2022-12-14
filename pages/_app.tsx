import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layout/layout";
import { Analytics } from "@vercel/analytics/react";
import "../public/fonts.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
