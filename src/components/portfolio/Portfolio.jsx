/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import "./portfolio.css";

import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

//Array
const data = [
  {
    id: 1,
    Image: IMG1,
    title: "Crypto Currency Dashbord & Financial Visualization",
    github: "https://github.com",
    demo: "https://dribble.com",
  },
  {
    id: 2,
    Image: IMG2,
    title: "Crypto Currency Dashbord & Financial Visualization",
    github: "https://github.com",
    demo: "https://dribble.com",
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
