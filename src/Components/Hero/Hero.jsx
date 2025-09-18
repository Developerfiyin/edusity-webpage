import "./Hero.css";
import arrow from "../../assets/dark-arrow.png";
const Hero = () => {
  return (
    <>
      <div className="hero container">
        <div className="hero-text">
          <h1>We ensure a better world</h1>
          <p>
            {" "}
            Our cutting-edge curriclum is designed to empower students with the
            knowledge, skills, and experiences needed to excel in the dynamic
            field of education{" "}
          </p>
          <button className="btn">
            Explore more <img src={arrow} alt="The arrow image" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
