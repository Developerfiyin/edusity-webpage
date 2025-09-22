import "./contact.css";
import msgicon from "../../assets/msg-icon.png";

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
          <li>Contact@GreatStack.dev</li>
          <li>+1-234-577-8899</li>
          <li>
            77 Massachusetts Ave, Cambridge <br /> Ma 02139, United States
          </li>
        </ul>
      </div>
      <div className="contact-col"></div>
    </div>
  );
};
export default Contact;
