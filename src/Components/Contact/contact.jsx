import "./contact.css";
import msgicon from "../../assets/msg-icon.png";
import mailicon from "../../assets/mail-icon.png";
import phoneicon from "../../assets/phone-icon.png";
import locationicon from "../../assets/location-icon.png";
import arrwwhite from "../../assets/white-arrow.png";
import React from "react";
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
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
            {" "}
            <img src={mailicon} alt="The mail icon" />
            Contact@GreatStack.dev
          </li>
          <li>
            {" "}
            <img src={phoneicon} alt="The phone icon" />
            +1-234-577-8899
          </li>
          <li>
            {" "}
            <img src={locationicon} alt="The location icon" />
            77 Massachusetts Ave, Cambridge <br /> Ma 02139, United States{" "}
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor="Name"> YOUR NAME :</label> <br />
          <input
            type="text"
            name="Your name"
            placeholder="Enter your name"
            required
          />
          <label htmlFor="number"> PHONE NUMBER</label>
          <input
            type="tel"
            placeholder="+1-234-556-6780"
            name="number"
            required
          />
          <label htmlFor="text">Enter your messages</label>
          <textarea
            type="text"
            placeholder="send your text"
            rows="6"
            required
          />
          <button type="submit" className="btn dark-icon">
            {" "}
            Submit now <img src={arrwwhite} alt="the white arrow icon" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};
export default Contact;
