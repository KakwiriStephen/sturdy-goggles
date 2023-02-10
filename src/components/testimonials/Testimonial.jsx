import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avater">
            <img src={AVTR1} alt="Avatar" />
            <h5 className="client__name">Earnest Achieng</h5>
            <small>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              voluptas sint totam assumenda accusantium quia architecto nulla.
              Quasi, totam pariatur voluptatem, eveniet iste quisquam eum
              deserunt veritatis ab magnam quia?
            </small>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Testimonial;
