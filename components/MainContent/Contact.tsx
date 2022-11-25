import classes from "./Contact.module.scss";

import Map from "../Map";
import { useContext, useState } from "react";

import { FaFacebook, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { useInView } from "react-intersection-observer";

export default function ContactUs(props: any) {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  let messageClassname;
  if (showSuccessMessage && !showFailureMessage) {
    messageClassname = `${classes.success} ${classes.message}`;
  } else if (!showSuccessMessage && showFailureMessage) {
    messageClassname = `${classes.failure} ${classes.message}`;
  } else if (!showSuccessMessage && !showFailureMessage) {
    messageClassname = `${classes.message} `;
  }

  const handleClick = () => {
    window.open(
      "https://www.google.com/maps/place/Advanced+Car+Creations/@33.7750044,-117.9041331,17z/data=!4m12!1m6!3m5!1s0x80dcd81863a56d43:0x8b389526507b4adf!2sAdvanced+Car+Creations!8m2!3d33.7749616!4d-117.9019493!3m4!1s0x80dcd81863a56d43:0x8b389526507b4adf!8m2!3d33.7749616!4d-117.9019493"
    );
  };

  const { ref: myRef, inView } = useInView({ triggerOnce: true });
  const handleSubmit = async (event: {
    preventDefault: () => void;
    target: {
      name: { value: any };
      email: { value: any };
      message: { value: any };
    };
  }) => {
    event.preventDefault();

    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/form";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const { error } = await response.json();
    if (error) {
      console.log(error);
      setShowSuccessMessage(false);
      setShowFailureMessage(true);
      return;
    }
    setShowSuccessMessage(true);
    setShowFailureMessage(false);
  };

  return (
    <section id={"contact"} className={classes.contactUs}>
      <div ref={myRef} className={classes.container}>
        <div className={classes.title}>
          <h2> Get In Touch</h2>
        </div>
        <div className={classes.box}>
          {/* Forms to contact */}

          <div className={`${classes.contact} ${classes.form}`}>
            <h3>Message Us</h3>
            {/*  @ts-ignore*/}

            <form onSubmit={handleSubmit} className={classes.contactForm}>
              <div className={classes.emailPhone}>
                <input
                  type={"text"}
                  name="name"
                  id="name"
                  placeholder="First Name"
                  required
                ></input>
              </div>

              <div className={classes.emailPhone}>
                <input
                  type={"email"}
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                ></input>
              </div>

              <textarea
                name="message"
                id="message"
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
            <div
              className={`${classes.message} ${
                showFailureMessage ? classes.failure : ""
              } ${showSuccessMessage ? classes.success : ""}`}
            ></div>
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
            {!inView ? <div>Loading...</div> : <Map />}
          </div>
        </div>
      </div>
    </section>
  );
}
