import Head from "next/head";
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
  createContext,
  useEffect,
  useState,
} from "react";
import styles from "./layout.module.scss";
import Navigation from "./Navigation";
import Footer from "./Footer";

export const VisibleContext = createContext();

function Layout(props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let domReady = (cb) => {
      document.readyState === "interactive" ||
      document.readyState === "complete"
        ? cb()
        : document.addEventListener("DOMContentLoaded", cb);
    };
    domReady(() => {
      // Display body when DOM is loaded
      setVisible(true);
    });
  });

  return (
    <>
      <VisibleContext.Provider value={visible}>
        <Navigation />
        <main className={styles.main}>{props.children}</main>
        <Footer />
      </VisibleContext.Provider>
    </>
  );
}

export default Layout;
