import React from "react";
import "./contact.css";
import { HiMail } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiMail />
            <h4>Email</h4>
            <h5>ngottakakwiri@gmail.com</h5>
            <a
              href="mailto:ngottakakwiri@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <HiMail />
            <h4>Call</h4>
            <h5>+254 715 378 281</h5>
            <a href="tel:+254715378281" target="_blank" rel="noreferrer">
              +254715378281
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp />
            <h4>WhatsApp </h4>
            <h5>kakwiri</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+254715378281"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        {/* End of contact options */}
        <form action="">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
