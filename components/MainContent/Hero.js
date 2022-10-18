import classes from "./Hero.module.scss";
import Image from "next/image";
import image from "../../images/landing/wave12.svg";

export default function Hero() {
  return (
    <section className={classes.hero}>
      
      <div className={classes.pic}></div>
    </section>
  );
}
