import classes from "./card.module.scss";
import Image from "next/image";
import { FiZoomIn } from "react-icons/fi";
import image from "../../images/car.jpeg";
import ImageSlider from "../MainContent/ImageSlider";
import { useState } from "react";

export default function Card(props) {
  const [isModal, setModal] = useState(false);
  const [isLoad, setLoad] = useState(false);
  const handleClick = () => {
    if (isModal === false) {
      setModal(true);
      props.setShrink(true);
      setLoad(true);
    } else if (isModal === true) {
      setModal(false);
      props.setShrink(false);
    }
  };

  const first = Object.keys(props.folder)[0];

  return (
    <div className={classes.workCard}>
      <ImageSlider
        handleClick={handleClick}
        setmodal={setModal}
        isModal={isModal}
        folder={props.folder}
        isLoad={isLoad}
        setLoad={setLoad}
      />
      <div className={classes.workImage}>
        <div className={classes.pic}>
          <Image src={props.folder[first]} />
        </div>
        <div onClick={handleClick} className={classes.workOverlay}>
          <span className={classes.workIcon}>
            <FiZoomIn />
          </span>
        </div>
      </div>
      <div className={classes.workDesc}>
        <h3> {props.name}</h3>
        <a
          onClick={handleClick}
          className={`${classes.Btn} ${classes.secondaryBtn} ${classes.sm}`}
        >
          View More Images
        </a>
      </div>
    </div>
  );
}
