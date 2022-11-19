import { createContext } from "react";
import styles from "./layout.module.scss";
import Navigation from "./Navigation";

import NewFooter from "./NewFooter";
import { useRef } from "react";

export const ScrollContext = createContext();

function Layout(props) {
  const hero = useRef(null);
  const about = useRef(null);
  const gallery = useRef(null);
  const contact = useRef(null);

  return (
    <>
      <ScrollContext.Provider
        value={{ hero: hero, about: about, gallery: gallery, contact: contact }}
      >
        <Navigation />
        <main className={styles.main}>{props.children}</main>
        <NewFooter />
      </ScrollContext.Provider>
    </>
  );
}

export default Layout;
