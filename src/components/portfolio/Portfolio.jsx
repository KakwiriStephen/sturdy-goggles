/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import "./portfolio.css";

import IMG2 from "../../assets/Capture1.PNG";
import IMG4 from "../../assets/Capture3.PNG";
import IMG5 from "../../assets/Capture4.PNG";
import IMG6 from "../../assets/Capture5.PNG";

import pr1 from "../../assets/projects/cart.jpg";
import pr2 from "../../assets/projects/nat.jpg";
import pr3 from "../../assets/projects/web3.jpg";
import pr4 from "../../assets/projects/ecom.jpg";
import pr5 from "../../assets/projects/analysis.jpg";
import pr6 from "../../assets/projects/saf.jpg";
import pr7 from "../../assets/projects/inv.jpg";

//Array
const data = [
  {
    id: 1,
    title: "Product Catalogue / E-commerce",
    Image: pr1,
    github: "https://github.com/KakwiriStephen/VirtuMart",
    demo: "https://virtu-mart.vercel.app/",
  },

  {
    id: 2,
    title: "Tour Companion (Natours)",
    Image: pr2,
    github: "https://github.com/KakwiriStephen/Natours",
    demo: "https://natours-g12a.onrender.com/",
  },
  {
    id: 3,
    title: "Web3 Crowd-funding Platform",
    Image: pr3,
    github: "https://github.com/KakwiriStephen/Web3-FundFlow",
    demo: "https://github.com/KakwiriStephen/Web3-FundFlow",
  },
  {
    id: 4,
    title: "Mini E-commerce Platform",
    Image: pr4,
    github: "https://github.com/KakwiriStephen/Speak-Omm",
    demo: "https://phanox.vercel.app/",
  },
  {
    id: 5,
    title: "Analytics Dashboard",
    Image: pr5,
    github: "https://github.com/KakwiriStephen/reimagined-invention-shoppy",
    demo: "https://reimagined-invention-shoppy-kakwiristephen.vercel.app/",
  },
  {
    id: 6,
    title: "Camping Companion",
    Image: pr6,
    github: "https://github.com/KakwiriStephen/CampSafari",
    demo: "https://camp-safari.vercel.app/",
  },
  {
    id: 7,
    title: "Stock Inventory Manager",
    Image: pr7,
    github: "https://github.com/KakwiriStephen/Stock-Management-System",
    demo: "https://github.com/KakwiriStephen/Stock-Management-System",
  },

  // {
  //   id: 8,
  //   Image: IMG4,
  //   title: "LinkedIn Clone",
  //   github: "https://github.com/KakwiriStephen/LinkedIn-Clone",
  //   demo: "https://linkedin-clone-kakwiri.netlify.app/",
  // },
  // {
  //   id: 9,
  //   Image: IMG5,
  //   title: "FeedBack Generator",
  //   github: "https://github.com/KakwiriStephen/Team-Sardinew2",
  //   demo: "https://team-sardinew2-jk6y-git-fork-zuri-training-main-damil27.vercel.app/",
  // },
  // {
  //   id: 10,
  //   Image: IMG2,
  //   title: "Forkify Recipe Web-App",
  //   github: "https://github.com/KakwiriStephen/Forkify",
  //   demo: "",
  // },
  // {
  //   id: 11,
  //   Image: IMG6,
  //   title: "PowerPlus Fitness Mentor",
  //   github: "https://github.com/KakwiriStephen/PowerPulse-MuscleMentor",
  //   demo: "https://muscle-mentor-kakwiri.netlify.app/",
  // },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, Image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfoli__item-image">
                <img src={Image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
