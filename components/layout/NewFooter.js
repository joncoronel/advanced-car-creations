import classes from "./NewFooter.module.scss";
import { FaFacebook, FaInstagram, FaYelp } from "react-icons/fa";
import { Link } from "react-scroll";

export default function NewFooter() {
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
              <li>
                <Link
                  className={classes.navLink}
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={0}
                  ignoreCancelEvents={true}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={classes.navLink}
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={0}
                  ignoreCancelEvents={true}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className={classes.navLink}
                  to="gallery"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={0}
                  ignoreCancelEvents={true}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  className={classes.navLink}
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={0}
                  ignoreCancelEvents={true}
                >
                  Contact Us
                </Link>
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
                  aria-label={"Visit our Facebook Page"}
                >
                  <FaFacebook className={classes.uil} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/advancedcarcreations/?hl=en"
                  className={classes.socialLink}
                  aria-label={"Visit our Instagram Page"}
                >
                  <FaInstagram className={classes.uil} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.yelp.com/biz/advanced-car-creations-garden-grove-2"
                  className={classes.socialLink}
                  aria-label={"Visit our Yelp Page"}
                >
                  <FaYelp className={classes.uil} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className={classes.copyright}>
        &copy; Copyright 2022. All rights reserved
      </p>
    </footer>
  );
}
