import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import * as Scroll from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <>
      <nav className={`container ${sticky ? "dark-nav" : ""}`}>
        <img src={logo} alt="logo image" className="logo" />
        <ul>
          <li>
            <Link to="hero" smooth={true} offset={0} duration={500}>
              Home
            </Link>
          </li>

          <li>
            {" "}
            <Link to="programs" smooth={true} offset={-260} duration={500}>
              {" "}
              Program
            </Link>{" "}
          </li>

          <li>
            {" "}
            <Link to="about" smooth={true} duration={500} offset={-150}>
              About us
            </Link>
          </li>

          <li>
            {" "}
            <Link to="campus" smooth={true} duration={500} offset={-260}>
              Campus
            </Link>
          </li>

          <li>
            {" "}
            <Link to="testimonials" smooth={true} offset={-260} duration={500}>
              Testimonials
            </Link>
          </li>

          <li>
            <button className="btn">
              {" "}
              <Link to="contact" duration={500} offset={-260} smooth={true}>
                Contact us
              </Link>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
