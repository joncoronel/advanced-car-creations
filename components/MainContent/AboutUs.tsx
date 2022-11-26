import classes from "./AboutUs.module.scss";

import { BsFillSpeakerFill } from "react-icons/bs";
import { MdPower } from "react-icons/md";

import { GiCarWheel } from "react-icons/gi";
import { RiAlarmWarningFill } from "react-icons/ri";
import Info from "./Info";
import React, { useContext } from "react";

import Waves from "../layout/Waves";

export default function AboutUs() {
  return (
    <>
      <section id={"about"} className={classes.about}>
        <div className={classes.container}>
          <div className={classes.text}>
            <h2>
              Customize Your Vehicle <br /> with a Range of Services!
            </h2>
          </div>
          <div className={classes.rowItems}>
            <div className={classes.containerBox}>
              <BsFillSpeakerFill className={classes.containerImage} />
              <h3 className={classes.type}>Car Audio</h3>
            </div>

            <div className={classes.containerBox}>
              <GiCarWheel className={classes.containerImage} />
              <h3 className={classes.type}>Wheels</h3>
            </div>
            <div className={classes.containerBox}>
              <RiAlarmWarningFill className={classes.containerImage} />
              <h3 className={classes.type}>Alarms</h3>
            </div>
            <div className={classes.containerBox}>
              <MdPower className={classes.containerImage} />
              <h3 className={classes.type}>
                Custom
                <br />
                Electronics
              </h3>
            </div>
          </div>
        </div>
        <Info />
      </section>
      <Waves />
    </>
  );
}
