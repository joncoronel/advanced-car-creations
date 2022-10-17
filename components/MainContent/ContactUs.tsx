import classes from "./ContactUs.module.scss";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Map from "../Map";

export default function ContactUs() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <section className={classes.contact}>
      <div className={classes.contactContainer}>
        {/* Form Section */}
        <div className={classes.formContainer}>
          <h3>Message Us</h3>
          <form action="" className={classes.contactForm}>
            <input type={"text"} placeholder="Your Name" required></input>
            <input
              type={"email"}
              name=""
              id=""
              placeholder="Enter Your Email..."
              required
            ></input>
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
        {/* Map Section */}
        <div className={classes.map}>
          {!isLoaded ? <div>Loading...</div> : <Map />}
        </div>
      </div>
    </section>
  );
}
