import "./programs.css";
import Program1 from "../../assets/program-1.png";
import Program2 from "../../assets/program-2.png";
import Program3 from "../../assets/program-3.png";
import Programicon1 from "../../assets/program-icon-1.png";
import Programicon2 from "../../assets/program-icon-2.png";
import Programicon3 from "../../assets/program-icon-3.png";
const Programs = () => {
  return (
    <div className="programs">
      <div className="program ">
        <img src={Program1} alt="The program image" />
        <div className="caption">
          <img src={Programicon1} alt="The programming image " />
          <p>GRraduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={Program2} alt="The program image 2" />
        <div className="caption">
          <img src={Programicon2} alt="the second icon image" />
          <p>Master's degree</p>
        </div>
      </div>
      <div className="program">
        <img src={Program3} alt="The program image 3" />
        <div className="caption">
          <img src={Programicon3} alt="the third icon image" />
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  );
};
export default Programs;
