import classes from "./TestimonialCard.module.scss";
import User1 from "../../images/users/user1.jpg";
import User2 from "../../images/users/user2.jpg";
import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function TestimonialCard(props) {
  return (
    <div className={classes.card}>
      <div className={classes.image}>
        <Image
          src={props.image}
          alt="Picture of the author"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className={classes.name}>{props.name}</div>
      <div className={classes.rating}>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiOutlineStar />
      </div>
      <div className={classes.quote}>{props.quote}</div>
    </div>
  );
}
