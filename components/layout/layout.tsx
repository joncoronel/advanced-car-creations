import Head from "next/head";
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import styles from "./layout.module.scss";
import Navigation from "./Navigation";
import Footer from "./Footer";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const DynamicHeader = dynamic(() => import("./Navigation"), {
  suspense: true,
  ssr: false,
});

function Layout(props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) {
  return (
    <>
      <Suspense fallback={`Loading...`}>
        <DynamicHeader />
      </Suspense>
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
