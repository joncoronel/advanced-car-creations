import classes from "./NewFooter.module.scss";
import { FaFacebook, FaInstagram, FaYelp } from "react-icons/fa";
import Link from "next/link";
import { useState, useEffect, useRef, useContext } from "react";

import { ScrollContext } from "../layout/layout";

export default function NewFooter() {
  const section = useContext(ScrollContext);
  const handleClick = (e) => {
    e.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.findUs}>
          <div className={classes.title}>Store Info</div>
          <div className={classes.content}>
            <div className={classes.address}>
              13231 W Garden Grove Blvd<br></br>Garden Grove, CA <br></br>92843
            </div>
            <div className={classes.hours}>
              Mon - Fri | 10am - 7pm <br></br>Sun | Closed
            </div>
          </div>
        </div>
        <div className={classes.quickLinks}>
          <div className={classes.title}>Quick Links</div>
          <div className={classes.content}>
            <ul className={classes.links}>
              <li
                onClick={() => {
                  handleClick(section.hero);
                }}
              >
                Home
              </li>
              <li
                onClick={() => {
                  handleClick(section.about);
                }}
              >
                About Us
              </li>
              <li
                onClick={() => {
                  handleClick(section.gallery);
                }}
              >
                Gallery
              </li>
              <li
                onClick={() => {
                  handleClick(section.contact);
                }}
              >
                Contact Us
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.other}>
          <div className={classes.title}>Socials</div>
          <div className={classes.content}>
            <ul className={classes.socialMedia}>
              <li>
                <a
                  href="https://www.facebook.com/advanced-car-creations-114086455269891/"
                  className={classes.socialLink}
                >
                  <FaFacebook className={classes.uil} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/advancedcarcreations/?hl=en"
                  className={classes.socialLink}
                >
                  <FaInstagram className={classes.uil} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.yelp.com/biz/advanced-car-creations-garden-grove-2"
                  className={classes.socialLink}
                >
                  <FaYelp className={classes.uil} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
