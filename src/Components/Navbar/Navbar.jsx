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

//let Link = Scroll.Link;

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
            <Link to="programs" smooth={true} offset={0} duration={500}>
              {" "}
              Program
            </Link>{" "}
          </li>

          <li>
            {" "}
            <Link to="testimonials" smooth={true}>
              Testimonials
            </Link>
          </li>
          <li>
            {" "}
            <Link to="about" smooth={true} duration={500} offset={0}>
              About us
            </Link>
          </li>
          <li>
            <button className="btn">
              {" "}
              <Link to="contact" duration={500} offset={0}>
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
