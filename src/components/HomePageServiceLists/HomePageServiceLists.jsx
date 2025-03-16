import "./HomePageServiceLists.scss";
const HomePageServiceLists = () => {
  return (
    <section className="homepage-service-lists">
      <h3 className="homepage-service-lists__header">
        Explore our beauty services designed to enhance your natural beauty and
        confidence
      </h3>
      <div className="homepage-service-lists__list-container">
        <div className="homepage-service-lists__list">
          <h2 className="homepage-service-lists__list--header">Waxing</h2>
          <p className="homepage-service-lists__list--body">
            Smooth, precise waxing awaits
          </p>
        </div>
      </div>
      <div className="homepage-service-lists__list-container">
        <div className="homepage-service-lists__list">
          <h2 className="homepage-service-lists__list--header">Hair</h2>
          <p className="homepage-service-lists__list--body">
            Sharp, stylish cuts delivered
          </p>
        </div>
      </div>
      <div className="homepage-service-lists__list-container">
        <div className="homepage-service-lists__list">
          <h2 className="homepage-service-lists__list--header">
            Lash Extension
          </h2>
          <p className="homepage-service-lists__list--body">
            Bold, flawless lashes crafted
          </p>
        </div>
      </div>
      <div className="homepage-service-lists__list-container">
        <div className="homepage-service-lists__list">
          <h2 className="homepage-service-lists__list--header">Hair Color</h2>
          <p className="homepage-service-lists__list--body">
            Vibrant, expert color achieved.
          </p>
        </div>
      </div>
      <div className="homepage-service-lists__list-container">
        <div className="homepage-service-lists__list">
          <h2 className="homepage-service-lists__list--header">Beard</h2>
          <p className="homepage-service-lists__list--body">
            Clean, sculpted beards shaped
          </p>
        </div>
      </div>

      <div className="homepage-service-lists__button-container">
        <a
          className="homepage-service-lists__button-container--button"
          href="#"
        >
          More services
        </a>
      </div>
    </section>
  );
};
export default HomePageServiceLists;
