import "./programs.css";
import Program1 from "../../assets/program-1.png";
import Program2 from "../../assets/program-2.png";
import Program3 from "../../assets/program-3.png";
const Programs = () => {
  return (
    <div className="programs">
      <div className="program ">
        <img src={Program1} alt="The program image" />
        <img src={Program2} alt="The program image 2" />
        <img src={Program3} alt="The program image 3" />
      </div>
    </div>
  );
};
export default Programs;
