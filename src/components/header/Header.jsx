import React from "react";
import "./header.css";
import CTA from "./CTA";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Kakwiri Stephen</h1>
        <h5>
          <div className="text-light">Fullstack Developer</div>
          {/* <p>
            Proficient in designing and implementing software solutions,
            debugging and troubleshooting issues, and collaborating with
            cross-functional teams to deliver high-quality software products.
            Strong problem-solving skills, attention to detail, and ability to
            adapt to new technologies and frameworks. Looking for a challenging
            opportunity to utilize my skills and contribute to the success of a
            dynamic organization.
          </p> */}
        </h5>
        <CTA />
      </div>
    </header>
  );
};

export default Header;
