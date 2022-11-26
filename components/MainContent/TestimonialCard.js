import classes from "./TestimonialCard.module.scss";
import User1 from "../../images/users/user1.jpg";
import User2 from "../../images/users/user2.jpg";
import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaYelp } from "react-icons/fa";

export default function TestimonialCard(props) {
  const noStars = 5 - props.rating;

  const stars = [];
  for (let i = 0; i < props.rating; i++) {
    stars.push(<AiFillStar className={classes.star} />);
  }

  if (noStars > 0) {
    for (let i = 0; i < noStars; i++) {
      stars.push(<AiOutlineStar key={i} className={classes.star} />);
    }
  }
  return (
    <div className={classes.card}>
      <FaYelp className={classes.logo} />

      <div className={classes.image}>
        <Image
          src={props.image}
          alt="Picture of the author"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className={classes.name}>{props.name}</div>
      <div className={classes.rating}>{stars}</div>
      <div className={classes.quote}>{props.quote}</div>
    </div>
  );
}
