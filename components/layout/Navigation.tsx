//@ts-nocheck

import classes from "./Navigation.module.scss";
import { Link } from "react-scroll";

import { useState, useEffect } from "react";

export default function Navigation(props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      setIsScrolled(window.pageYOffset > 40);
    }
  };

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
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        console.log("hello i did it");
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  });

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={overlayClassname}
      ></div>
      <header
        className={`${classes.header} ${isOpen ? classes.open : ""} ${
          isScrolled ? classes.scrolled : classes.unscrolled
        }`}
      >
        <nav className={`${navbarClassname} `}>
          <a className={classes.logo}>Advanced Car Creations</a>

          <div className={classes.links}>
            <ul>
              <li>
                <Link
                  activeClass={`${classes.active}`}
                  className={classes.navLink}
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={0}
                  ignoreCancelEvents={true}
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  activeClass={`${classes.active}`}
                  className={classes.navLink}
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={0}
                  ignoreCancelEvents={true}
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  activeClass={`${classes.active}`}
                  className={classes.navLink}
                  to="gallery"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={0}
                  ignoreCancelEvents={true}
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  activeClass={`${classes.active}`}
                  className={classes.navLink}
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={0}
                  ignoreCancelEvents={true}
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  Contact Us
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
