import "./About.css";
import about from "../../assets/about.png";
import playicon from "../../assets/play-icon.png";
const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about} alt="the about image" className="about-img" />
        <img src={playicon} alt="the play icon img" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nuturing Tomorrow's leaders today</h2>
        <p>
          Embark on a transformative educational journey with our university's
          comprehensive education programs. Our cutting-edge curriculum is
          designed to empower students with the knowledge, skills, and
          experiences needed to excel in the dynamic field of education.
        </p>
        <p>
          With a focus on innovation, hands-on learning, and personalized
          mentorship, our programs prepare aspiring educators to make a
          meaningful impact in classrooms, schools, and communities.
        </p>
        <p>
          Whether you aspire to become a teacher, adminstrator, counselor, or
          educational leader, our diverse range of programs offers the perfect
          pathway to achieve your goals and unlock your full potential in
          shaping the future of education.
        </p>
      </div>
    </div>
  );
};
export default About;
