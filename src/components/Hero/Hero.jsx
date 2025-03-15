import "./Hero.scss";
const Hero = () => {
  return (
    <section className="hero">
      <section className="hero__content">
        <h2 className="hero__merchant-name">
          Welcome to <br /> Nano's beauty <br /> Salon
        </h2>
        <h2 className="hero__page-headline">Discover the perfect looks!</h2>
        <div className="hero__button-container">
          {/* <button className="hero__button-container--button">
            See services
          </button> */}
          <button className="hero__button-container--button">Book now </button>
        </div>
      </section>
    </section>
  );
};
export default Hero;
