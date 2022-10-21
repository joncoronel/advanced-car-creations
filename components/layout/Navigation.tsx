//@ts-nocheck
import Link from "next/link";
import classes from "./Navigation.module.scss";
import { FaRegMoon } from "react-icons/fa";

import { useState, useEffect, useRef } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  let headerClassname;

  if (isScrolled && isOpen) {
    headerClassname = `${classes.header} ${classes.scrolled} ${classes.open}`;
  } else if (isScrolled) {
    headerClassname = `${classes.header} ${classes.scrolled}`;
  } else if (isOpen) {
    headerClassname = `${classes.header} ${classes.open}`;
  } else {
    headerClassname = classes.header;
  }
  const burgerClassname = isOpen
    ? `${classes.hamburger} ${classes.open} `
    : classes.hamburger;
  const navbarClassname = isOpen
    ? `${classes.container} ${classes.open} `
    : classes.container;
  const overlayClassname = isOpen
    ? `${classes.overlay} ${classes.open} `
    : classes.overlay;
  useEffect(() => {
    const hamburger = document.querySelector(`.${classes.hamburger}`);

    function stickyNavbar() {
      if (isScrolled === false) {
        if (window.pageYOffset > 0) {
          console.log(isScrolled);
          setIsScrolled(!isScrolled);
        }
      } else if (isScrolled === true) {
        if (!(window.pageYOffset > 0)) {
          setIsScrolled(!isScrolled);
          console.log(isScrolled);
        }
      }
    }
    window.addEventListener("scroll", stickyNavbar);
  });

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={overlayClassname}
      ></div>
      <header className={headerClassname}>
        <nav className={navbarClassname}>
          <Link href="/">
            <a className={classes.logo}>Advanced Car Creations</a>
          </Link>
          <div className={classes.links}>
            <ul>
              <li>
                <Link href="#hero">
                  <a className={classes.navLink}>Home</a>
                </Link>
              </li>
              <li>
                <Link href="#about">
                  <a className={classes.navLink}>About Us</a>
                </Link>
              </li>
              <li>
                <Link href="#gallery">
                  <a className={classes.navLink}>Gallery</a>
                </Link>
              </li>
              <li>
                <Link href="#contact">
                  <a href="#contact" className={classes.navLink}>
                    Contact Us
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div onClick={() => setIsOpen(!isOpen)} className={burgerClassname}>
            <div className={classes.bar}></div>
            <div className={classes.bar}></div>
          </div>
        </nav>
      </header>
    </>
  );
}
