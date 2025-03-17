import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTiktok,
  faInstagram,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.scss";
const Footer = () => {
  //   <FontAwesomeIcon
  //   icon={item}
  //   className="testimonial__rate-container--rating-star"
  // />
  return (
    <section className="footer">
      <div className="footer__salon-info">
        <h1 className="footer__salon-info--name">Nano's Beauty Salon</h1>
        <p className="footer__salon-info--title">
          Experience beauty with our expert salon services
        </p>
        <a
          className="footer__salon-info--address"
          href="https://www.google.com/maps/place/Nano's+Beauty+Salon/@43.7415314,-79.5839145,17z/data=!3m1!4b1!4m6!3m5!1s0x882b3b9c72b95ccb:0xae754a015c5c7750!8m2!3d43.7415314!4d-79.5839145!16s%2Fg%2F11w37ygvfs?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
        >
          The Albion Mall, 1530 Albion Rd, Etobicoke, ON M9V 1B4
        </a>
        <div className="footer__social-container">
          <a
            className="footer__social-container--link"
            href="https://www.instagram.com/nanosbeautysalon?igsh=enRrNGoxOWY3OTNj"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="footer__social-container--icon-insta"
            />
          </a>
          <a
            className="footer__social-container--link"
            href="https://www.tiktok.com/@nanosbeautysalon?_t=ZM-8ukAhdQyW3i&_r=1"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faTiktok}
              className="footer__social-container--icon-tiktok"
            />
          </a>
        </div>
        <div>
          <div>
            <a>Services</a>
            <a>Appoinment</a>
            <a>book now</a>
          </div>
          <div>
            <p>Copyright © 2025 Nano's Beauty Salon. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
