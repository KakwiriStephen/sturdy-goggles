/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./nav.css";

import { AiOutlineHome } from "react-icons/ai";
import { FiUserPlus } from "react-icons/fi";
import { BsFillBookmarksFill } from "react-icons/bs";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";

const Nav = () => {
  return (
    <nav>
      <a href="#">
        <AiOutlineHome />
      </a>
      <a href="#about ">
        <FiUserPlus />
      </a>
      <a href="experience">
        <BsFillBookmarksFill />
      </a>
      <a href="services">
        <RiServiceLine />
      </a>
      <a href="contact">
        <BiMessageDetail />
      </a>
    </nav>
  );
};

export default Nav;
