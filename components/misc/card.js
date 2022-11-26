import classes from "./card.module.scss";
import Image from "next/image";
import { FiZoomIn } from "react-icons/fi";

export default function Card(props) {
  const first = Object.keys(props.folder)[0];

  return (
    <div className={classes.workCard}>
      <div className={classes.workImage}>
        <div className={classes.pic}>
          <Image alt="example of past work" src={props.folder[first]} />
        </div>
        <div
          onClick={() => {
            props.handleClick();
            props.selectFolder(props.folder);
          }}
          className={classes.workOverlay}
        >
          <span className={classes.workIcon}>
            <FiZoomIn />
          </span>
        </div>
      </div>
      <div className={classes.workDesc}>
        <h3> {props.name}</h3>
        <a
          onClick={() => {
            props.handleClick();
            props.selectFolder(props.folder);
          }}
          className={`${classes.Btn} ${classes.secondaryBtn} ${classes.sm}`}
        >
          View More Images
        </a>
      </div>
    </div>
  );
}
