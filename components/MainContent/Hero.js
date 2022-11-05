import classes from "./Hero.module.scss";
import Image from "next/image";
import car from "../../images/car.avif";

import React, { useContext } from "react";
import { VisibleContext } from "../layout/layout";

import Link from "next/link";

export default function Hero() {
  const visible = useContext(VisibleContext);
  let visibleClass =
    visible === false
      ? `${classes.visible}`
      : `${classes.visible} ${classes.ready}`;
  return (
    <section id={"hero"} className={classes.hero}>
      <Image
        className={classes.back}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        src="/car.avif"
      />
      <div className={classes.content}>
        <div className={`${classes.textBox} ${visibleClass}`}>
          <h1>hello there</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at
            tincidunt mi. Vestibulum nec eleifend mi, in porttitor nisi.
          </p>
          <div className={classes.landBtn}>
            <Link scroll={false} href="#about">
              <a className={classes.myButton} href="#about">
                About Us
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className={classes.wavy}>
        <svg
          id="visual"
          viewBox="0 0 960 300"
          width="960"
          height="300"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 93L22.8 94.7C45.7 96.3 91.3 99.7 137 105.7C182.7 111.7 228.3 120.3 274 116.5C319.7 112.7 365.3 96.3 411.2 94.3C457 92.3 503 104.7 548.8 106.2C594.7 107.7 640.3 98.3 686 95.3C731.7 92.3 777.3 95.7 823 94.3C868.7 93 914.3 87 937.2 84L960 81L960 301L937.2 301C914.3 301 868.7 301 823 301C777.3 301 731.7 301 686 301C640.3 301 594.7 301 548.8 301C503 301 457 301 411.2 301C365.3 301 319.7 301 274 301C228.3 301 182.7 301 137 301C91.3 301 45.7 301 22.8 301L0 301Z"
            fill="#0f3a57"
          ></path>
          <path
            d="M0 132L22.8 138.3C45.7 144.7 91.3 157.3 137 151.8C182.7 146.3 228.3 122.7 274 126.5C319.7 130.3 365.3 161.7 411.2 165.7C457 169.7 503 146.3 548.8 139.7C594.7 133 640.3 143 686 137.3C731.7 131.7 777.3 110.3 823 102.8C868.7 95.3 914.3 101.7 937.2 104.8L960 108L960 301L937.2 301C914.3 301 868.7 301 823 301C777.3 301 731.7 301 686 301C640.3 301 594.7 301 548.8 301C503 301 457 301 411.2 301C365.3 301 319.7 301 274 301C228.3 301 182.7 301 137 301C91.3 301 45.7 301 22.8 301L0 301Z"
            fill="#315977"
          ></path>
          <path
            d="M0 141L22.8 145C45.7 149 91.3 157 137 156.8C182.7 156.7 228.3 148.3 274 155.7C319.7 163 365.3 186 411.2 192C457 198 503 187 548.8 177.2C594.7 167.3 640.3 158.7 686 156.7C731.7 154.7 777.3 159.3 823 162.5C868.7 165.7 914.3 167.3 937.2 168.2L960 169L960 301L937.2 301C914.3 301 868.7 301 823 301C777.3 301 731.7 301 686 301C640.3 301 594.7 301 548.8 301C503 301 457 301 411.2 301C365.3 301 319.7 301 274 301C228.3 301 182.7 301 137 301C91.3 301 45.7 301 22.8 301L0 301Z"
            fill="#507a99"
          ></path>
          <path
            d="M0 223L22.8 225.5C45.7 228 91.3 233 137 237C182.7 241 228.3 244 274 237.5C319.7 231 365.3 215 411.2 205.3C457 195.7 503 192.3 548.8 189.3C594.7 186.3 640.3 183.7 686 191.5C731.7 199.3 777.3 217.7 823 225.8C868.7 234 914.3 232 937.2 231L960 230L960 301L937.2 301C914.3 301 868.7 301 823 301C777.3 301 731.7 301 686 301C640.3 301 594.7 301 548.8 301C503 301 457 301 411.2 301C365.3 301 319.7 301 274 301C228.3 301 182.7 301 137 301C91.3 301 45.7 301 22.8 301L0 301Z"
            fill="#6f9dbc"
          ></path>
          <path
            d="M0 221L22.8 229.2C45.7 237.3 91.3 253.7 137 257.8C182.7 262 228.3 254 274 249.2C319.7 244.3 365.3 242.7 411.2 240.5C457 238.3 503 235.7 548.8 239.3C594.7 243 640.3 253 686 252.5C731.7 252 777.3 241 823 243.2C868.7 245.3 914.3 260.7 937.2 268.3L960 276L960 301L937.2 301C914.3 301 868.7 301 823 301C777.3 301 731.7 301 686 301C640.3 301 594.7 301 548.8 301C503 301 457 301 411.2 301C365.3 301 319.7 301 274 301C228.3 301 182.7 301 137 301C91.3 301 45.7 301 22.8 301L0 301Z"
            fill="#90c1e1"
          ></path>
        </svg>
      </div>
    </section>
  );
}
