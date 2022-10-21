import classes from "./Gallery.module.scss";
import Image from "next/image";
import image from "../../images/car.jpeg";
import { FiZoomIn } from "react-icons/fi";
import Card from "../misc/card";
import folder from "../../images/gallery/galleryOne/astro2.jpg";
import ImageSlider from "./ImageSlider";
import { useState } from "react";

export default function Gallery(props) {
  const [isShrink, setShrink] = useState(false);
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
  let allFiles = [];
  allFiles.push(
    importAll(
      require.context("images/gallery/galleryOne", false, /^(.\/).*(.jpg)$/)
    )
  );
  allFiles.push(
    importAll(
      require.context("images/gallery/galleryTwo", false, /^(.\/).*(.jpg)$/)
    )
  );

  return (
    <section id={"gallery"} className={`${classes.work} ${classes.section}`}>
      <div className={classes.container}>
        <div className={classes.workHeader}>
          <div className={classes.workTitle}>
            <h2 className={classes.heading}>Previous Work</h2>
          </div>
          <div className={classes.filterBtns}>
            <button className={classes.filterBtn}>All</button>
            <button className={classes.filterBtn}>Product</button>
            <button className={classes.filterBtn}>Interacting</button>
            <button className={classes.filterBtn}>Web App</button>
          </div>
        </div>
        <div className={classes.workGallery}>
          {allFiles.map((folder, index) => {
            return (
              <Card
                key={index}
                name={props.names[index]}
                setShrink={setShrink}
                isShrink={isShrink}
                folder={folder}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
