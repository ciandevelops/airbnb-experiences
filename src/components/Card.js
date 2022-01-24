const Card = (props) => {
  return (
    <div className="card">
      <img src={`/images/${props.img}`} alt="card" />

      <div className="card--stats">
        <img src="/images/star.png" alt="star" className="card--star" />
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
