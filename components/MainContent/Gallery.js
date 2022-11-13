import classes from "./Gallery.module.scss";

import Card from "../misc/card";

import { useState } from "react";
//import ImageSlider from "./ImageSlider";
import Swipers from "./Swipers";

export default function Gallery(props) {
  const [isModal, setModal] = useState(false);
  const [isLoad, setLoad] = useState(false);

  const handleClick = () => {
    if (isModal === false) {
      setModal(true);
      setLoad(true);
    } else if (isModal === true) {
      setModal(false);
      setLoad(false);
    }
  };
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
  const [isFolder, setFolder] = useState(allFiles[0]);
  const selectFolder = (folder) => {
    setFolder(folder);
  };

  return (
    <section id={"gallery"} className={`${classes.work} ${classes.section}`}>
      <Swipers isModal={isModal} setModal={setModal} folder={isFolder} />
      <div
        className={
          isModal === false
            ? classes.container
            : `${classes.container} ${classes.shrink}`
        }
      >
        <div className={classes.workHeader}>
          <div className={classes.workTitle}>
            <h2 className={classes.heading}>Previous Work</h2>
          </div>
        </div>
        <div className={classes.workGallery}>
          {allFiles.map((folder, index) => {
            return (
              <Card
                key={index}
                name={props.names[index]}
                folder={folder}
                handleClick={handleClick}
                selectFolder={selectFolder}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
