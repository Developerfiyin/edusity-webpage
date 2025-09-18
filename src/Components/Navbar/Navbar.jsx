import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  <nav>
    <img src={logo} alt="logo image" />
    <ul>
      <li>Home</li>
      <li>Products</li>
      <li>Menu</li>
      <li>About us</li>
      <li>FAQ</li>
      <li>Contact us</li>
    </ul>
  </nav>;
  return;
};

export default Navbar;
