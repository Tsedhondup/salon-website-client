import "./AboutusHome.scss";
const AboutUsHome = () => {
  return (
    <section className="about-us-home">
      <div className="about-us-home__content">
        <div className="about-us-home__text-container">
          <h2 className="about-us-home__text-container--header">Our Story</h2>
          <p className="about-us-home__text-container--body">
            At Nano's Beauty Salon, we believe in enhancing beauty and
            well-being. Founded in 2023, our salon is dedicated to providing
            exceptional services in a welcoming environment, ensuring every
            visit is a delightful experience.
          </p>
        </div>
        <div className="about-us-home__text-container">
          <h3 className="about-us-home__text-container--header">100%</h3>
          <p className="about-us-home__text-container--body">
            Our commitment to customer satisfaction drives us to deliver
            personalized care and high-quality treatments.
          </p>
        </div>
        <div className="about-us-home__text-container">
          <h3 className="about-us-home__text-container--header">3 years</h3>
          <p className="about-us-home__text-container--body">
            Our team of skilled professionals is passionate about beauty and
            wellness, ensuring you receive the best care.
          </p>
        </div>
      </div>
    </section>
  );
};
export default AboutUsHome;
