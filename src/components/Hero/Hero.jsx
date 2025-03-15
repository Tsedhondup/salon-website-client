import "./Hero.scss";
// eslint-disable-next-line no-unused-vars
import { delay, motion } from "framer-motion";
const Hero = () => {
  return (
    <motion.section
      className="hero"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        transition: {
          ease: "linear",
          duration: 1.5,
        },
      }}
      viewport={{ once: true, amount: 1 }}
    >
      <section className="hero__content">
        <motion.h2
          className="hero__merchant-name"
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              ease: "linear",
              duration: 1.5,
              delay: .5,
            },
          }}
          viewport={{ once: true, amount: 1 }}
        >
          Welcome to <br /> Nano's beauty <br /> Salon
        </motion.h2>
        <motion.h2
          className="hero__page-headline"
          initial={{
            opacity: 0,
            y: 60,
            backgroundColor: "rgba(0, 0, 0, 0)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            backgroundColor: "rgba(0, 0, 0, .1)",

            transition: {
              ease: "linear",
              duration: 1.5,
              delay: 1,
              backgroundColor: { delay: 2 },
            },
          }}
          viewport={{ once: true, amount: 1 }}
        >
          Discover the perfect looks!
        </motion.h2>
        <div className="hero__button-container">
          <motion.a
            className="hero__button-container--book"
            href="tel:+4167440019"
            initial={{
              opacity: 0,
              color: "#000000",
              backgroundColor: "rgba(0, 0, 0, 1)",
              borderColor: "rgba(0,0,0,0)",
            }}
            whileInView={{
              opacity: 1,
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              borderColor: "#ffffff",
              color: "#ffffff",
              transition: {
                ease: "linear",
                duration: 1.5,
                delay: 1.5,
                backgroundColor: { delay: 2 },
                color: { delay: 2.5, duration: 1.7 },
                borderColor: { delay: 3, duration: 1.9 },
              },
            }}
            viewport={{ once: true, amount: 1 }}
          >
            Book now
          </motion.a>
        </div>
      </section>
    </motion.section>
  );
};
export default Hero;
