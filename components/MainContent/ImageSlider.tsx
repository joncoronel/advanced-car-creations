import classes from "./ImageSlider.module.scss";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import image from "../../images/car.jpeg";
import Image from "next/image";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdCloseFullscreen } from "react-icons/md";

export default function ImageSlider(props: any) {
  const [isOpen, setIsOpen] = useState(0);
  const nextImage = () => {
    const length = Object.keys(props.folder).length;
    const value = isOpen + 1;

    if (value > length - 1) {
      setIsOpen(0);
    } else {
      setIsOpen(value);
    }
  };
  const prevImage = () => {
    const length = Object.keys(props.folder).length;
    const value = isOpen - 1;

    if (value < 0) {
      setIsOpen(length - 1);
    } else {
      setIsOpen(value);
    }
  };

  return (
    <div
      className={
        props.isModal === true
          ? `${classes.modal} ${classes.open}`
          : classes.modal
      }
    >
      <div
        onClick={props.handleClick}
        className={
          props.isModal === true
            ? `${classes.modalOverlay} ${classes.open}`
            : classes.modalOverlay
        }
      ></div>
      <div
        className={
          props.isModal === true
            ? `${classes.sliderWrap} ${classes.open}`
            : classes.sliderWrap
        }
      >
        <div
          onClick={prevImage}
          className={`${classes.prevBtn} ${classes.navigation}`}
        >
          <FaAngleLeft />
        </div>
        <div className={classes.images}>
          <div onClick={props.handleClick} className={classes.exit}>
            <AiFillCloseCircle />
          </div>

          {Object.keys(props.folder).map((pic: any, i: any) => {
            return (
              <div
                key={i}
                className={
                  isOpen === i
                    ? `${classes.image} ${classes.showImage}`
                    : classes.image
                }
              >
                <Image priority={true} src={props.folder[pic]} />
              </div>
            );
          })}
        </div>
        <div
          onClick={nextImage}
          className={`${classes.nextBtn} ${classes.navigation}`}
        >
          <FaAngleRight />
        </div>
      </div>
    </div>
  );
}
