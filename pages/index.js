import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import LandingPage from "../components/MainContent/LandingPage";
import Contact from "../components/MainContent/Contact";
import AboutUs from "../components/MainContent/AboutUs";
import LazyRender from "../components/misc/LazyRender";

import Gallery from "../components/MainContent/Gallery";
import { useEffect, useState, useCallback } from "react";
import Hero from "../components/MainContent/Hero";

import dynamic from "next/dynamic";

const Home = (props) => {
  const [visible, setVisible] = useState(false);
  const onVisible = useCallback(() => setVisible(true), []);

  useEffect(() => {
    const onTouchStart = () => {
      return null;
    };
    document.addEventListener("touchstart", onTouchStart, { passive: true });
  });
  const value = props.names;

  return (
    <>
      <Head>
        <title>Advanced Car Creations</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.spacing}>
        <Hero />
        <AboutUs />
        <Gallery names={value} folders={value} />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const fs = require("fs");
  const length = fs.readdirSync("images/gallery/");

  return {
    props: {
      names: length,
    },
  };
}

export default Home;
