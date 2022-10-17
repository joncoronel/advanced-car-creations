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
      <Navigation />
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
