import Grid from "../images/grid.png";

const Hero = () => {
  return (
    <section className="hero">
      <img src={Grid} alt="hero" className="hero--img" />

      <div className="hero--info">
        <h1 className="info--title">Online Experiences</h1>
        <p className="info--text">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
};

export default Hero;
