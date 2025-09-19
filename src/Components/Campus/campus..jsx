import "./campus.css";
import gallery1 from "../../assets/gallery-1.png";
import gallery2 from "../../assets/gallery-2.png";
import gallery3 from "../../assets/gallery-3.png";
import gallery4 from "../../assets/gallery-4.png";
import whitearrow from "../../assets/white-arrow.png";

const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={gallery1} alt="the first gallery image" />
        <img src={gallery2} alt="The second gallery image" />
        <img src={gallery3} alt="The third gallery image" />
        <img src={gallery4} alt="The fourth gallery image" />
      </div>
      <button className="btn dark-icon">
        See more <img src={whitearrow} alt="the white arrow image" />
      </button>
    </div>
  );
};
export default Campus;
