/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import "./portfolio.css";

import IMG1 from "../../assets/Capture.PNG";
import IMG2 from "../../assets/Capture1.PNG";
import IMG3 from "../../assets/Capture2.PNG";
import IMG4 from "../../assets/Capture3.PNG";
import IMG5 from "../../assets/Capture4.PNG";
import IMG6 from "../../assets/Capture5.PNG";

//Array
const data = [
  {
    id: 1,
    Image: IMG1,
    title: "Natours Tour Web-App",
    github: "https://github.com/KakwiriStephen/Natours",
    demo: "https://arcane-earth-84769.herokuapp.com/",
  },
  {
    id: 2,
    Image: IMG2,
    title: "Forkify Recipe Web-App",
    github: "https://github.com/KakwiriStephen/Forkify",
    demo: "https://forkify-v2.netlify.app/",
  },
  {
    id: 3,
    Image: IMG3,
    title: "Crypto Currency Dashbord & Financial Visualization",
    github: "https://github.com",
    demo: "https://dribble.com",
  },
  {
    id: 4,
    Image: IMG4,
    title: "Crypto Currency Dashbord & Financial Visualization",
    github: "https://github.com",
    demo: "https://dribble.com",
  },
  {
    id: 5,
    Image: IMG5,
    title: "Crypto Currency Dashbord & Financial Visualization",
    github: "https://github.com",
    demo: "https://dribble.com",
  },
  {
    id: 6,
    Image: IMG6,
    title: "Crypto Currency Dashbord & Financial Visualization",
    github: "https://github.com",
    demo: "https://dribble.com",
  },
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
