import classes from "./AboutUs.module.scss";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Map from "../Map";
import { BsFillSpeakerFill } from "react-icons/bs";
import { MdPower } from "react-icons/md";

import {
  FaFacebook,
  FaInstagram,
  FaYelp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { GiCarWheel } from "react-icons/gi";
import { RiAlarmWarningFill } from "react-icons/ri";

export default function AboutUs() {
  return (
    <section id={"about"} className={classes.container}>
      <div className={classes.text}>
        <h2>
          Customize Your Vehicle <br /> with a Range of Services!
        </h2>
      </div>
      <div className={classes.rowItems}>
        <div className={classes.containerBox}>
          <BsFillSpeakerFill className={classes.containerImage} />
          <h4>Car Audio</h4>
        </div>

        <div className={classes.containerBox}>
          <GiCarWheel className={classes.containerImage} />
          <h4>Wheels</h4>
        </div>
        <div className={classes.containerBox}>
          <RiAlarmWarningFill className={classes.containerImage} />
          <h4>Alarms</h4>
        </div>
        <div className={classes.containerBox}>
          <MdPower className={classes.containerImage} />
          <h4>
            Custom
            <br />
            Electronics
          </h4>
        </div>
      </div>
    </section>
  );
}
