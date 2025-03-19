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
          duration: 0.5,
        },
      }}
      viewport={{ once: true, amount: 1 }}
    >
      <section className="hero__over-lay">
        <section className="hero__content">
          <motion.h2
            className="hero__merchant-name"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                ease: "linear",
                delay: 0.5,
                duration: 0.5,
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
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,

              transition: {
                ease: "linear",
                delay: 0.5,
                duration: 0.5,
              },
            }}
            viewport={{ once: true, amount: 1 }}
          >
            Discover the perfect looks!
          </motion.h2>
          <div className="hero__button-container">
            <motion.a
              className="hero__button-container--book"
              href="tel:+14167440019"
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
                  duration: 0.5,
                  delay: 0.5,
                  backgroundColor: { delay: 1 },
                  color: { delay: 1.5, duration: 0.5 },
                  borderColor: { delay: 2, duration: 0.5 },
                },
              }}
              viewport={{ once: true, amount: 1 }}
            >
              Book now
            </motion.a>
          </div>
        </section>
      </section>
      {/* <section className="hero__birth-location">
        <h3 className="hero__birth-location__birth">since 2022</h3>
        <h3 className="hero__birth-location__location">
          The Albion Mall, 1530 Albion Rd, Etobicoke, ON M9V 1B4
        </h3>
      </section> */}
    </motion.section>
  );
};
export default Hero;
