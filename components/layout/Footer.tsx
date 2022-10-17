import classes from "./Footer.module.scss";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYelp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <Link href="/">
          <a className={classes.logo}>
            Advanced Ca<span>r Creations</span>
          </a>
        </Link>
        <p className={classes.text}>
          &copy; Copyright 2022. All rights reserved
        </p>
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
    </footer>
  );
}
