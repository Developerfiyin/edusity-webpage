import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="container">
        <img src={logo} alt="logo image" className="logo" />
        <ul>
          <li>Home</li>
          <li>Program</li>
          <li>Testimonials</li>
          <li>About us</li>
          <li>
            {" "}
            <button className="btn"> Contact us</button>{" "}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
