import Athlete from "../images/image-1.png";
import Star from "../images/star.png";

const Card = () => {
  return (
    <div className="cards">
      <section>
        <img src={Athlete} alt="swimmer" />

        <br />
        <img src={Star} alt="star" />
        <span>5.0 (6) - USA</span>
        <p>Life lessons with Katie Zaferes</p>
        <p>
          <b>From $136 </b> / person
        </p>
      </section>

      <section>
        <img src={Athlete} alt="swimmer" />

        <br />
        <img src={Star} alt="star" />
        <span>5.0 (6) - USA</span>
        <p>Life lessons with Katie Zaferes</p>
        <p>
          <b>From $136 </b> / person
        </p>
      </section>

      <section>
        <img src={Athlete} alt="swimmer" />

        <br />
        <img src={Star} alt="star" />
        <span>5.0 (6) - USA</span>
        <p>Life lessons with Katie Zaferes</p>
        <p>
          <b>From $136 </b> / person
        </p>
      </section>
    </div>
  );
};

export default Card;
