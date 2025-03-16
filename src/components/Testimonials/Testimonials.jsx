import "./Testimonials.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import nanoClientImage from "../../assets/images/testimonial.jpg";

const Testimonials = () => {
  return (
    <section>
      <div>
        <FontAwesomeIcon icon={faStar} className="star" />
        <FontAwesomeIcon icon={faStar} className="star" />
        <FontAwesomeIcon icon={faStar} className="star" />
        <FontAwesomeIcon icon={faStar} className="star" />
        <FontAwesomeIcon icon={faStar} className="star" />
        <p>
          Had my hair colored at Nano’s Beauty Salon, love it! Vibrant, expert
          color achieved perfectly. Definitely returning!
        </p>
        <div>
          <img src={nanoClientImage} />
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
