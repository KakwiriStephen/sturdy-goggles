/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import "./portfolio.css";

import IMG1 from "../../assets/dashbord.PNG";
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
    title: "reimagined-dashboard-invention",
    github: "https://github.com/KakwiriStephen/reimagined-invention-shoppy",
    demo: "https://kakwiri-reimagined-invention-shoppy.vercel.app/",
  },
  {
    id: 2,
    Image: IMG3,
    title: "Speak-Om Modern E-Commerce ",
    github: "https://github.com/KakwiriStephen/Speak-Omm",
    demo: "https://phanox.vercel.app/",
  },
  {
    id: 3,
    Image: IMG4,
    title: "LinkedIn Clone",
    github: "https://github.com/KakwiriStephen/LinkedIn-Clone",
    demo: "https://linkedin-clone-kakwiri.netlify.app/",
  },
  {
    id: 5,
    Image: IMG5,
    title: "FeedBack Generator",
    github: "https://github.com/KakwiriStephen/Team-Sardinew2",
    demo: "https://team-sardinew2-jk6y-git-fork-zuri-training-main-damil27.vercel.app/",
  },
  {
    id: 4,
    Image: IMG2,
    title: "Forkify Recipe Web-App",
    github: "https://github.com/KakwiriStephen/Forkify",
    demo: "https://forkify-v2.netlify.app/",
  },
  {
    id: 6,
    Image: IMG6,
    title: "PowerPlus Fitness Mentor",
    github: "https://github.com/KakwiriStephen/PowerPulse-MuscleMentor",
    demo: "https://muscle-mentor-kakwiri.netlify.app/",
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
