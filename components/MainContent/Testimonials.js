import classes from "./Testimonials.module.scss";
import User1 from "../../images/users/user1.jpg";
import User2 from "../../images/users/user2.jpg";
import User3 from "../../images/users/user3.jpg";
import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  const reviews = [
    {
      name: "Von P.",
      image: User3,
      review:
        "These guys are straight forward and no hidden costs. Professional work.  I had my LED strip lights installed under my car.  Jose got me in and out same day.  Definitely will go back if I need anything done.",
      rating: 5,
    },
    {
      name: "Brian C.",
      image: User2,
      review:
        "I have purchased a lot of car audio equipment from them and have had them install different components of my system in addition to tuning my system, gains on my amps, equalizers on head unit, etc. Bottom line, they are very knowledgeable and friendly and have reasonable prices as well! They do an excellent job installing! I highly recommend them for all your car audio needs!",
      rating: 5,
    },
    {
      name: "Larry L.",
      image: User1,
      review:
        "Time heals all things. The guys are Advanced truly took the effort to correct the past and right the future. They offered fair pricing and again they have earned my trust and business. These guys knows their stuff and they know their gear for sure. I highly recommend them once again!",
      rating: 4,
    },
  ];

  const listReviews = reviews.map((rev) => (
    <TestimonialCard
      key={rev.name}
      name={rev.name}
      quote={rev.review}
      image={rev.image}
      rating={rev.rating}
    />
  ));
  return (
    <section className={classes.testimonials}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>See What Others Have Said!</h2>
        </div>
        <div className={classes.cards}>{listReviews}</div>
      </div>
    </section>
  );
}
