import classes from "./Info.module.scss";
import Image from "next/image";
import aboutImage from "../../images/carCreations.avif";

export default function Info() {
  return (
    <section className={classes.info}>
      <div className={classes.container}>
        <div className={classes.text}>
          <h3 className={classes.title}>Who We Are</h3>
          <p className={classes.about}>
            Started in 1992, by three long time friends (Jose, Robert & George),
            Advanced Car Creations- aka: ACC, has risen to the top of their
            class in car audio and installation. Whether it's a car alarm or a
            booming sound system, with over 17 years of car audio knowledge and
            experience, there’s nothing that ACC can't handle. They’ve put out
            numerous show cars that have been pictured in such magazines as Low
            Rider, Custom Imports, Auto Security & Sound, Street Trucks and
            others. ACC is also an authorized dealer.
          </p>
        </div>
        <div className={classes.image}>
          <Image src={aboutImage} />
        </div>
      </div>
    </section>
  );
}
