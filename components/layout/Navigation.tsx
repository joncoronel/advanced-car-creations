//@ts-nocheck
import Link from "next/link";
import classes from "./Navigation.module.scss";

import { useState, useEffect, useRef, useContext } from "react";

import { ScrollContext } from "../layout/layout";

export default function Navigation(props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const section = useContext(ScrollContext);
  const handleClick = (e) => {
    e.current?.scrollIntoView({ behavior: "smooth" });
  };

  let headerClassname;

  if (isScrolled && isOpen) {
    headerClassname = `${classes.header} ${classes.scrolled} ${classes.open}`;
  } else if (isScrolled) {
    headerClassname = `${classes.header} ${classes.scrolled}`;
  } else if (isOpen) {
    headerClassname = `${classes.header} ${classes.open} ${classes.unscrolled}`;
  } else {
    headerClassname = `${classes.header} ${classes.unscrolled}`;
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
    function stickyNavbar() {
      if (window.scrollY >= 90) {
        //console.log(isScrolled);
        //console.log(currentRoute);
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", stickyNavbar);
    // sets top nav to active based on which section in viewport

    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll("nav div ul li a");
    window.onscroll = () => {
      var current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 300) {
          current = section.getAttribute("id");
        }
      });

      navLi.forEach((li) => {
        let value = li.getAttribute("goto")?.replace("#", "");

        li.classList.remove(`${classes.active}`);
        if (value == current) {
          li.classList.add(`${classes.active}`);
        }
      });
    };
  });

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={overlayClassname}
      ></div>
      <header className={headerClassname}>
        <nav className={`${navbarClassname} `}>
          <Link href="/">
            <a className={classes.logo}>Advanced Car Creations</a>
          </Link>
          <div className={classes.links}>
            <ul>
              <li>
                <a
                  onClick={() => {
                    setIsOpen(!isOpen);
                    handleClick(section.hero);
                  }}
                  className={`${classes.navLink} ${classes.active}`}
                  goto="#hero"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setIsOpen(!isOpen);
                    handleClick(section.about);
                  }}
                  className={classes.navLink}
                  goto="#about"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setIsOpen(!isOpen);
                    handleClick(section.gallery);
                  }}
                  className={classes.navLink}
                  goto="#gallery"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setIsOpen(!isOpen);
                    handleClick(section.contact);
                  }}
                  className={classes.navLink}
                  goto="#contact"
                >
                  Contact Us
                </a>
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
