// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./AboutUsHome.scss";
import BookButton from "../BookButton/BookButton";
import pic5 from "../../assets/images/pic3.jpeg";
const AboutUsHome = () => {
  return (
    <section className="about-us-home">
      <div className="about-us-home__content">
        <div className="about-us-home__text-container">
          <motion.h2
            className="about-us-home__text-container--header"
            initial={{
              opacity: 0,
              y: 60,
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
          >
            Our Story
          </motion.h2>
          <motion.p
            className="about-us-home__text-container--body"
            initial={{
              opacity: 0,
              y: 60,
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
          >
            At Nano's Beauty Salon, we believe in enhancing beauty and
            well-being. Founded in 2022, our salon is dedicated to providing
            exceptional services in a welcoming environment, ensuring every
            visit is a delightful experience.
          </motion.p>
          {/* <BookButton /> */}
        </div>
        <div className="about-us-home__text-container">
          <motion.h3
            className="about-us-home__text-container--header"
            initial={{
              opacity: 0,
              y: 60,
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
          >
            100%
          </motion.h3>
          <motion.p
            className="about-us-home__text-container--body"
            initial={{
              opacity: 0,
              y: 60,
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
          >
            Our commitment to customer satisfaction drives us to deliver
            personalized care and high-quality treatments.
          </motion.p>
        </div>
        <div className="about-us-home__text-container">
          <motion.h3
            className="about-us-home__text-container--header"
            initial={{
              opacity: 0,
              y: 60,
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
          >
            20+ years
          </motion.h3>
          <motion.p
            className="about-us-home__text-container--body"
            initial={{
              opacity: 0,
              y: 60,
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
          >
            The staff at Nano’s Beauty Salon, with over 20 years of combined
            experience, is passionate about beauty and wellness, ensuring
            exceptional care.
          </motion.p>
        </div>
        <div className="about-us-home__image-container">
          <motion.img
            src={pic5}
            alt="white color hair"
            className="about-us-home__image-container--img"
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                ease: "linear",
                duration: 1,
              },
            }}
            viewport={{ once: true, amount: 0 }}
          />
        </div>
      </div>

      {/* <div className="about-us-home__book-button-container">
        <motion.a
          className="about-us-home__book-button-container--button"
          href="tel:+14167440019"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              ease: "linear",
              delay: 1,
              duration: 0.5,
            },
          }}
          viewport={{ once: true, amount: 1 }}
        >
          Book now
        </motion.a>
      </div> */}
    </section>
  );
};
export default AboutUsHome;
