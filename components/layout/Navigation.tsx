import Link from "next/link";
import classes from "./Navigation.module.scss";
import { FaRegMoon } from "react-icons/fa";

import { useState, useEffect, useRef } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const headerClassname = isScrolled
    ? `${classes.header} ${classes.scrolled}`
    : classes.header;
  const burgerClassname = isOpen
    ? `${classes.hamburger} ${classes.open} `
    : classes.hamburger;
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
      <div onClick={() => setIsOpen(!isOpen)} className={classes.overlay}></div>
      <header className={headerClassname}>
        <nav className={classes.container}>
          <Link href="/">
            <a className={classes.logo}>
              Advanced Ca<span>r Creations</span>
            </a>
          </Link>
          <div className={classes.links}>
            <ul>
              <li>
                <Link href="/">
                  <a className={classes.navLink}>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className={classes.navLink}>About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className={classes.navLink}>Gallery</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className={classes.navLink}>Contact Us</a>
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
