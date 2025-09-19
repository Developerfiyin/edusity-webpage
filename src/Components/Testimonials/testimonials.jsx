import "./testimonials.css";
import nexticon from "../../assets/next-icon.png";
import backicon from "../../assets/back-icon.png";
import user1 from "../../assets/user-1.png";
import user2 from "../../assets/user-2.png";
import user3 from "../../assets/user-3.png";
import user4 from "../../assets/user-4.png";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <img src={nexticon} alt="The back icon" className="next-btn" />
      <img src={backicon} alt="the next icon" className="back-icon" />
      <div className="img-slider">
        <img src={user1} alt="The user 1 image" />
        <img src={user2} alt="The user 2 image " />
        <img src={user3} alt="The user 3 image" />
        <img src={user4} alt="The user 4 image" />
      </div>
    </div>
  );
};
export default Testimonials;
