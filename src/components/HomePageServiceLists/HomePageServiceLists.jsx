// eslint-disable-next-line no-unused-vars
import { delay, motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./HomePageServiceLists.scss";
const HomePageServiceLists = () => {
  return (
    <section className="homepage-service-lists">
      <motion.h3
        className="homepage-service-lists__header"
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
        Check out our most popular services, trusted by many
      </motion.h3>
      <motion.div
        className="homepage-service-lists__list-container"
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
        <motion.div
          className="homepage-service-lists__list"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              ease: "linear",
              duration: 0.5,
              delay: 1,
            },
          }}
          viewport={{ once: true, amount: 1 }}
        >
          <h2 className="homepage-service-lists__list--header">Waxing</h2>
          <p className="homepage-service-lists__list--body">
            Smooth, precise waxing awaits
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        className="homepage-service-lists__list-container"
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
        <motion.div
          className="homepage-service-lists__list"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              ease: "linear",
              duration: 0.5,
              delay: 1,
            },
          }}
          viewport={{ once: true, amount: 1 }}
        >
          <h2 className="homepage-service-lists__list--header">Hair</h2>
          <p className="homepage-service-lists__list--body">
            Sharp, stylish cuts delivered
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        className="homepage-service-lists__list-container"
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
        <motion.div
          className="homepage-service-lists__list"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              ease: "linear",
              duration: 0.5,
              delay: 1,
            },
          }}
          viewport={{ once: true, amount: 1 }}
        >
          <h2 className="homepage-service-lists__list--header">
            Lash Extension
          </h2>
          <p className="homepage-service-lists__list--body">
            Bold, flawless lashes crafted
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        className="homepage-service-lists__list-container"
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
        <motion.div
          className="homepage-service-lists__list"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              ease: "linear",
              duration: 0.5,
              delay: 1,
            },
          }}
          viewport={{ once: true, amount: 1 }}
        >
          <h2 className="homepage-service-lists__list--header">Hair Color</h2>
          <p className="homepage-service-lists__list--body">
            Vibrant, expert color achieved.
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        className="homepage-service-lists__list-container"
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
        <motion.div
          className="homepage-service-lists__list"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              ease: "linear",
              duration: 0.5,
              delay: 1,
            },
          }}
          viewport={{ once: true, amount: 1 }}
        >
          <h2 className="homepage-service-lists__list--header">Beard</h2>
          <p className="homepage-service-lists__list--body">
            Clean, sculpted beards shaped
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="homepage-service-lists__button-container"
        initial={{
          borderColor: "#ffffff",
          opacity: 0,
        }}
        whileInView={{
          borderColor: "#21272e",
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
        <Link
          to="/services"
          className="homepage-service-lists__button-container--button"
        >
          More services
        </Link>
      </motion.div>
    </section>
  );
};
export default HomePageServiceLists;
