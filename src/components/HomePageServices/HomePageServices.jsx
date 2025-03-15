// import services from "../../data/services.json";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import nanoClientImage from "../../assets/images/nano1.jpg";
import "./HomePageServices.scss";
const HomePageServices = () => {
  return (
    <section className="service-home-page">
      <section className="service-home-page__content">
        <div className="image-text-container">
          <motion.img
            className="image-text-container__image"
            src={nanoClientImage}
            alt="image from salon"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,

              transition: {
                ease: "linear",
                duration: 0.5,
              },
            }}
            viewport={{ once: true, amount: 1 }}
          />

          <motion.div
            className="image-text-container__texts"
            initial={{
              top: "100%",
              opacity: 0,
            }}
            whileInView={{
              top: "88%",
              opacity: 1,
              transition: {
                ease: "linear",
                duration: 0.5,
              },
            }}
            viewport={{ once: true, amount: 1 }}
          >
            <motion.h3
              className="image-text-container__texts--header"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,

                transition: {
                  ease: "linear",
                  duration: 0.5,
                  delay: 0.5,
                },
              }}
              viewport={{ once: true, amount: 1 }}
            >
              48+
            </motion.h3>
            <motion.p
              className="image-text-container__texts--body"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,

                transition: {
                  ease: "linear",
                  duration: 0.5,
                  delay: 0.5,
                },
              }}
              viewport={{ once: true, amount: 1 }}
            >
              services by
            </motion.p>
            <motion.h3
              className="image-text-container__texts--header"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,

                transition: {
                  ease: "linear",
                  duration: 0.5,
                  delay: 0.5,
                },
              }}
              viewport={{ once: true, amount: 1 }}
            >
              10
            </motion.h3>
            <motion.p
              className="image-text-container__texts--body"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,

                transition: {
                  ease: "linear",
                  duration: 0.5,
                  delay: 0.5,
                },
              }}
              viewport={{ once: true, amount: 1 }}
            >
              Expert stylists
            </motion.p>
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default HomePageServices;
