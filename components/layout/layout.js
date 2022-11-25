import { createContext } from "react";
import styles from "./layout.module.scss";
import Navigation from "./Navigation";

import NewFooter from "./NewFooter";

export const ScrollContext = createContext();

function Layout(props) {
  return (
    <>
      <Navigation />
      <main className={styles.main}>{props.children}</main>
      <NewFooter />
    </>
  );
}

export default Layout;
