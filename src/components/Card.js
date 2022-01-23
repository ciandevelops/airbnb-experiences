import Star from "../images/star.png";
import Athlete from "../images/katie-zaferes.png";

const Card = (props) => {
  return (
    <div className="card">
      <img src={Athlete} alt="card" />
      <img src="../images/katie-zaferes.png" alt="card" />
      <img src={`../images/${props.img}`} alt="card" />

      <div className="card--stats">
        <img src={Star} alt="star" className="card--star" />
        <span>{props.rating}</span>
        <span className="gray">{props.reviewCount} • </span>
        <span className="gray">{props.country}</span>
      </div>

      <p>{props.title}</p>
      <p>
        <b>From $ {props.price} </b> / person
      </p>
    </div>
  );
};

export default Card;
