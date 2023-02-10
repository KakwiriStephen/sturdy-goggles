import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

const data = [
  {
    avatar: AVTR1,
    name: "Tina Karanja",
    review:
      "I had the pleasure of working with Kakwiri on a recent project and I was thoroughly impressed with their skills and dedication. He has a deep understanding of Computer Science, and their technical knowledge allowed us to efficiently and effectively tackle any challenges that arose. Kakwiri is also a fantastic communicator and team player, always willing to lend a helping hand and collaborate with others. I highly recommend him for any engineering role and I am confident he will exceed expectations.",
  },
  {
    avatar: AVTR2,
    name: "Kadzo Karanja",
    review:
      "I had the pleasure of working with Kakwiri on a recent project and I was thoroughly impressed with their skills and dedication. He has a deep understanding of Computer Science, and their technical knowledge allowed us to efficiently and effectively tackle any challenges that arose. Kakwiri is also a fantastic communicator and team player, always willing to lend a helping hand and collaborate with others. I highly recommend him for any engineering role and I am confident he will exceed expectations.",
  },
  {
    avatar: AVTR3,
    name: "Nacy Karanja",
    review:
      "I had the pleasure of working with Kakwiri on a recent project and I was thoroughly impressed with their skills and dedication. He has a deep understanding of Computer Science, and their technical knowledge allowed us to efficiently and effectively tackle any challenges that arose. Kakwiri is also a fantastic communicator and team player, always willing to lend a helping hand and collaborate with others. I highly recommend him for any engineering role and I am confident he will exceed expectations.",
  },
  {
    avatar: AVTR4,
    name: "Shiroo Karanja",
    review:
      "I had the pleasure of working with Kakwiri on a recent project and I was thoroughly impressed with their skills and dedication. He has a deep understanding of Computer Science, and their technical knowledge allowed us to efficiently and effectively tackle any challenges that arose. Kakwiri is also a fantastic communicator and team player, always willing to lend a helping hand and collaborate with others. I highly recommend him for any engineering role and I am confident he will exceed expectations.",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar" />
          </div>
          <h5 className="client__name">Earnest Achieng</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            voluptas sint totam assumenda accusantium quia architecto nulla.
            Quasi, totam pariatur voluptatem, eveniet iste quisquam eum deserunt
            veritatis ab magnam quia?
          </small>
        </article>
      </div>
    </section>
  );
};

export default Testimonial;
