import React, { useRef } from "react";
import "./contact.css";
import { HiMail } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
import { IoMdCall } from "react-icons/io";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uld5v81",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiMail className="contact__option-icon" />
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
            <IoMdCall className="contact__option-icon" />
            <h4>Call</h4>
            <h5>+254 715 378 281</h5>
            <a href="tel:+254715378281" target="_blank" rel="noreferrer">
              +254715378281
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp </h4>
            <h5>kakwiri</h5>
            <a
              href="https://wa.me/+254715378281"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        {/* End of contact options */}
        <form ref={form} onSubmit={sendEmail}>
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
