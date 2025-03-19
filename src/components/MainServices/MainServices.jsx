import services from "../../data/services.json";
import waxing from "../../assets/images/wax-service.jpg";
import lash from "../../assets/images/lash-service.jpg";
import hair from "../../assets/images/hair-service.jpg";
import beard from "../../assets/images/beard-service.jpg";
import brow from "../../assets/images/brow-service.jpg";
import facial from "../../assets/images/facial-service.jpg";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import "./MainServices.scss";
import BookButton from "../BookButton/BookButton";
const MainServices = () => {
  const chooseXcoordinate = (serviceName) => {
    if (
      serviceName === "Hair" ||
      serviceName === "Brow" ||
      serviceName === "Waxing"
    ) {
      return -90;
    } else {
      return 60;
    }
  };

  // Animation
  const initialView = {
    opacity: 0,
    y: 60,
  };
  const whileInView = {
    opacity: 1,
    y: 0,
    transition: {
      ease: "linear",
      duration: 0.5,
    },
  };
  const images = [hair, lash, brow, beard, waxing, facial];
  let indexNumber = 0;
  const serviceData = services.map((item) => {
    return item;
  });
  return (
    <section className="main-services">
      <motion.h1
        className="main-services__header"
        initial={{
          opacity: 0,
          // x: chooseXcoordinate(item.category),
          // translateX: 60,
          translateX: 60,
        }}
        whileInView={{
          opacity: 1,
          translateX: 0,
        }}
        transition={{
          ease: "linear",
          duration: 0.8,
        }}
        viewport={{ once: true, amount: 0 }}
      >
        Discover a wide range of services at <br />
        <span className="main-services__header--salon-name">
          Nano Beauty Salon
        </span>
        , tailored to elevate your beauty experience
      </motion.h1>
      <div className="main-services__lists">
        {serviceData.map((item) => {
          const serviecEl = (
            <div className="main-services__list-item">
              <motion.div
                className={`main-services__${item.category}-container`}
              >
                <motion.img
                  src={images[indexNumber]}
                  alt={item.category}
                  className={`
                  main-services__list-item--image 
                  main-services__list-item--${item.category}-image
                  `}
                  initial={{
                    opacity: 0,
                    // x: chooseXcoordinate(item.category),
                    // translateX: 60,
                    translateX: chooseXcoordinate(item.category),
                  }}
                  whileInView={{
                    opacity: 1,
                    translateX: 0,
                  }}
                  transition={{
                    ease: "linear",
                    duration: 0.5,
                  }}
                  viewport={{ once: true, amount: 0 }}
                />
              </motion.div>

              <div
                key={item.category}
                className={`main-services__list-item--texts main-services__list-item--${item.category}-texts`}
              >
                <motion.h2
                  className="main-services__list-item--category"
                  initial={initialView}
                  whileInView={whileInView}
                  viewport={{ once: true, amount: 1 }}
                >
                  {item.category}
                </motion.h2>
                <div className="main-services__service-detail-container">
                  {item.services.map((item2) => {
                    // Individual service and its detail
                    return (
                      <div
                        key={item2.name}
                        className="main-services__service-detail-content"
                      >
                        <motion.h3
                          className="main-services__service-detail-content--name"
                          initial={initialView}
                          whileInView={whileInView}
                          viewport={{ once: true, amount: 1 }}
                        >
                          {item2.name}
                        </motion.h3>
                        <motion.h3
                          className="main-services__service-detail-content--price"
                          initial={initialView}
                          whileInView={whileInView}
                          viewport={{ once: true, amount: 1 }}
                        >
                          {item2.price}
                        </motion.h3>
                        <motion.h3
                          className="main-services__service-detail-content--duration"
                          initial={initialView}
                          whileInView={whileInView}
                          viewport={{ once: true, amount: 1 }}
                        >
                          {item2.duration}
                        </motion.h3>
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
      <motion.div className="main-services__button-container">
        <motion.a
          className="main-services__button-container--button"
          href="tel:+4167440019"
          initial={{
            borderColor: "#21272e",
            opacity: 0,
          }}
          whileInView={{
            borderColor: "#ffffff",
            opacity: 1,
            transition: {
              ease: "linear",
              duration: 0.5,
              delay: 1,
              borderColor: { delay: 1.5 },
            },
          }}
          viewport={{ once: true, amount: 1 }}
        >
          Book Now
        </motion.a>
      </motion.div>
    </section>
  );
};
export default MainServices;
