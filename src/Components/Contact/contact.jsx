import "./contact.css";
import msgicon from "../../assets/msg-icon.png";
import mailicon from "../../assets/mail-icon.png";
import phoneicon from "../../assets/phone-icon.png";
import locationicon from "../../assets/location-icon.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a mesage{" "}
          <img src={msgicon} alt="a message icon was added here" />
        </h3>
        <p>
          Feel free to reach through the contact for or find our information
          below. Your feedback, questions, and suggestions are important to us
          as we strive to provide exceptional services to our university
          community.
        </p>
        <ul>
          <li>
            Contact@GreatStack.dev <img src={mailicon} alt="The mail icon" />
          </li>
          <li>
            +1-234-577-8899 <img src={phoneicon} alt="The phone icon" />
          </li>
          <li>
            77 Massachusetts Ave, Cambridge <br /> Ma 02139, United States{" "}
            <img src={locationicon} alt="The location icon" />
          </li>
        </ul>
      </div>
      <div className="contact-col"></div>
    </div>
  );
};
export default Contact;
