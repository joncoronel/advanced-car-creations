import classes from "./Contact.module.scss";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Map from "../Map";

import {
  FaFacebook,
  FaInstagram,
  FaYelp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { AiFillMail, AiFillPhone } from "react-icons/ai";

export default function ContactUs() {
  const handleClick = () => {
    window.open(
      "https://www.google.com/maps/place/Advanced+Car+Creations/@33.7750044,-117.9041331,17z/data=!4m12!1m6!3m5!1s0x80dcd81863a56d43:0x8b389526507b4adf!2sAdvanced+Car+Creations!8m2!3d33.7749616!4d-117.9019493!3m4!1s0x80dcd81863a56d43:0x8b389526507b4adf!8m2!3d33.7749616!4d-117.9019493"
    );
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  return (
    <div className={classes.contactUs}>
      <div className={classes.title}>
        <h2> Get in Touch</h2>
      </div>
      <div className={classes.box}>
        {/* Forms to contact */}

        <div className={`${classes.contact} ${classes.form}`}>
          <h3>Message Us</h3>
          <form action="" className={classes.contactForm}>
            <div className={classes.emailPhone}>
              <input type={"text"} placeholder="First Name" required></input>
              <input type={"text"} placeholder="Last Name"></input>
            </div>

            <div className={classes.emailPhone}>
              <input
                type={"email"}
                name=""
                id=""
                placeholder="Email"
                required
              ></input>
              <input
                type={"phone"}
                name=""
                id=""
                placeholder="Phone Number"
              ></input>
            </div>
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="Enter your message..."
            ></textarea>
            <input
              type={"submit"}
              value="Send"
              className={classes.sendButton}
            ></input>
          </form>
        </div>
        {/* Info on company and social media links */}
        <div className={`${classes.contact} ${classes.info}`}>
          <h3>Contact Info</h3>
          <div className={`${classes.infoBox} ${classes.spacing}`}>
            {/* info like email and address */}
            <div className={classes.address} onClick={handleClick}>
              <span>
                <FaMapMarkerAlt />
              </span>
              <p>13231 W Garden Grove Blvd, Garden Grove, CA 92843</p>
            </div>
            <div>
              <span>
                <AiFillMail />
              </span>
              <a href="mailto:contact@mail.com">contact@mail.com</a>
            </div>
            <div>
              <span>
                <AiFillPhone />
              </span>
              <a href="tel:(714) 971-1012">(714) 971-1012</a>
            </div>
            {/* social media links */}
            <ul className={classes.socials}>
              <li>
                <a href="https://www.facebook.com/advanced-car-creations-114086455269891/">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/advancedcarcreations/?hl=en">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Map columns through google maps*/}
        <div className={`${classes.contact} ${classes.map}`}>
          {!isLoaded ? <div>Loading...</div> : <div>Loading...</div>}
        </div>
      </div>
    </div>
  );
}
