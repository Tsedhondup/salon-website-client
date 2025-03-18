import services from "../../data/services.json";
import waxing from "../../assets/images/wax-service.jpg";
import lash from "../../assets/images/lash-service.jpg";
import hair from "../../assets/images/hair-service.jpg";
import beard from "../../assets/images/beard-service.jpg";
import brow from "../../assets/images/brow-service.jpg";
import facial from "../../assets/images/facial-service.jpg";

import "./MainServices.scss";
const MainServices = () => {
  const images = [hair, lash, brow, beard, waxing, facial];
  let indexNumber = 0;
  const serviceData = services.map((item) => {
    return item;
  });
  return (
    <section className="main-services">
      <h1 className="main-services__header">
        Discover a wide range of services at Nano Beauty Salon, tailored to
        elevate your beauty experience
      </h1>

      <div className="main-services__lists">
        {serviceData.map((item) => {
          const serviecEl = (
            <div className="main-services__list-item">
              <div className={`main-services__${item.category}-container`}>
                <img
                  src={images[indexNumber]}
                  alt={item.category}
                  className="main-services__list-item--image"
                />
              </div>

              <div
                key={item.category}
                className="main-services__list-item--texts"
              >
                <h2 className="main-services__list-item--category">
                  {item.category}
                </h2>
                <div className="main-services__service-detail-container">
                  {item.services.map((item2) => {
                    // Individual service and its detail
                    return (
                      <div
                        key={item2.name}
                        className="main-services__service-detail-content"
                      >
                        <h3 className="main-services__service-detail-content--name">
                          {item2.name}
                        </h3>
                        <h3 className="main-services__service-detail-content--price">
                          {item2.price}
                        </h3>
                        <h3 className="main-services__service-detail-content--duration">
                          {item2.duration}
                        </h3>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );

          indexNumber = indexNumber + 1;
          return serviecEl;
        })}
      </div>
    </section>
  );
};
export default MainServices;
