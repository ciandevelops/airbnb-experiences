import Athlete from "../images/image-1.png";
import Star from "../images/star.png";

const Card = () => {
  return (
    <div className="card">
      <img src={Athlete} alt="swimmer" />

      <div className="card--stats">
        <img src={Star} alt="star" className="card--star" />
        <span>5.0</span>
        <span className="gray">(6) •</span>
        <span className="gray">USA</span>
      </div>

      <p>Life lessons with Katie Zaferes</p>
      <p>
        <b>From $136 </b> / person
      </p>
    </div>
  );
};

export default Card;
