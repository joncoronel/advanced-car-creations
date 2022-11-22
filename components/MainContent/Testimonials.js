import classes from "./Testimonials.module.scss";
import User1 from "../../images/users/user1.jpg";
import User2 from "../../images/users/user2.jpg";
import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  const reviews = [
    {
      name: "Johnny U.",
      image: User2,
      review:
        "Wanted to upgrade my car alarm so I came here since a friend recommended them. They had good prices, were pretty fast with the work and I haven't had any problems with the car alarm so far.",
      rating: 5,
    },
    {
      name: "Larry L.",
      image: User1,
      review:
        "Time heals all things. The guys are Advanced truly took the effort to correct the past and right the future. They offered fair pricing and again they have earned my trust and business. These guys knows their stuff and they know their gear for sure. I highly recommend them once again!",
      rating: 5,
    },
    {
      name: "Larry L.",
      image: User1,
      review:
        "Time heals all things. The guys are Advanced truly took the effort to correct the past and right the future. They offered fair pricing and again they have earned my trust and business. These guys knows their stuff and they know their gear for sure. I highly recommend them once again!",
      rating: 5,
    },
  ];

  const listReviews = reviews.map((rev) => (
    <TestimonialCard
      key={rev.name}
      name={rev.name}
      quote={rev.review}
      image={rev.image}
    />
  ));
  return (
    <section className={classes.testimonials}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>Testimonials</h2>
        </div>
        <div className={classes.cards}>{listReviews}</div>
      </div>
    </section>
  );
}
