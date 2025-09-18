import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <nav>
        <img src={logo} alt="logo image" />
        <ul>
          <li>Home</li>
          <li>Program</li>
          <li>Testimonials</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
