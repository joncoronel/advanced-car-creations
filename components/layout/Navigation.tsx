//@ts-nocheck
import Link from "next/link";
import classes from "./Navigation.module.scss";
import { FaRegMoon } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    const hamburger = document.querySelector(`.${classes.hamburger}`);

    function stickyNavbar() {
      if (isScrolled === false) {
        if (window.pageYOffset > 0) {
          //console.log(isScrolled);
          //console.log(currentRoute);
          setIsScrolled(!isScrolled);
        }
      } else if (isScrolled === true) {
        if (!(window.pageYOffset > 0)) {
          setIsScrolled(!isScrolled);
          //console.log(isScrolled);
        }
      }
    }
    window.addEventListener("scroll", stickyNavbar);

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
        let value = li.getAttribute("href")?.replace("#", "");

        li.classList.remove(`${classes.active}`);
        if (value == current) {
          li.classList.add(`${classes.active}`);
          console.log("idk");
        }
      });
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      //console.log(anchor);
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document
          .querySelector(this.getAttribute("href"))
          .scrollIntoView({ behavior: "smooth" });
      });
    });
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
                <Link scroll={false} href="#hero">
                  <a
                    onClick={() => setIsOpen(!isOpen)}
                    className={`${classes.navLink} ${classes.active}`}
                    href="#hero"
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link scroll={false} href="#about">
                  <a
                    onClick={() => setIsOpen(!isOpen)}
                    className={classes.navLink}
                    href="#about"
                  >
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link scroll={false} href="#gallery">
                  <a
                    onClick={() => setIsOpen(!isOpen)}
                    className={classes.navLink}
                    href="#gallery"
                  >
                    Gallery
                  </a>
                </Link>
              </li>
              <li>
                <Link scroll={false} href="#contact">
                  <a
                    onClick={() => setIsOpen(!isOpen)}
                    href="#contact"
                    className={classes.navLink}
                  >
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
