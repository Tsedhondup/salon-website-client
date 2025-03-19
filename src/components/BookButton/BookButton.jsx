import "./BookButton.scss";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
const BookButton = () => {
  return (
    <section className="book-button-container">
      <motion.a
        className="book-button-container__button"
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
    </section>
  );
};
export default BookButton;
