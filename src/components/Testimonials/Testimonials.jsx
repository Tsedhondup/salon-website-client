import "./Testimonials.scss";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import nanoClientImage from "../../assets/images/testimonial.jpg";

const Testimonials = () => {
  const rating = [faStar, faStar, faStar, faStar, faStar];
  // Delay differences for rarting animation
  let delay = 0.1;

  return (
    <section className="testimonial">
      <div className="testimonial__rate-container">
        {rating.map((item) => {
          const itemEl = (
            <motion.div
              className="testimonial__rate-container--rating"
              key={delay}
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
                transition: {
                  ease: "linear",
                  duration: 0.5,
                  delay: delay,
                },
              }}
              viewport={{ once: true, amount: 1 }}
            >
              <FontAwesomeIcon
                icon={item}
                className="testimonial__rate-container--rating-star"
              />
            </motion.div>
          );
          delay = delay + 0.1;
          return itemEl;
        })}
      </div>

      <p className="testimonial__statement">
        Had my hair colored at Nano’s Beauty Salon, love it! Vibrant, expert
        color achieved perfectly. Definitely returning!
      </p>
      <div className="testimonial__image-container">
        <img
          src={nanoClientImage}
          alt="client-image"
          className="testimonial__image-container--image"
        />
      </div>
    </section>
  );
};
export default Testimonials;
