// import services from "../../data/services.json";
import nanoClientImage from "../../assets/images/nano1.jpg";
const HomePageServices = () => {
  return (
    <section className="service-home-page">
      <section className="service-home-page__content">
        <div className="image-text-container">
          <img
            className="image-text-container"
            src={nanoClientImage}
            alt="image from salon"
          />

          <div className="image-text-container__texts">
            <h3 className="image-text-container__texts--header">48+ </h3>
            <p className="image-text-container__texts--body">services by</p>
            <h3 className="image-text-container__texts--header">10 </h3>
            <p className="image-text-container__texts--body">Expert stylists</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HomePageServices;
