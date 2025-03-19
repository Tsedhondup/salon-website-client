/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import BookButton from "../BookButton/BookButton";
import "./Footer.scss";
const Footer = () => {
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
  return (
    <section className="footer">
      <div className="footer__salon-info">
        <motion.h1
          className="footer__salon-info--name"
          initial={initialView}
          whileInView={whileInView}
          viewport={{ once: true, amount: 1 }}
        >
          Nano's Beauty Salon
        </motion.h1>
        <motion.p
          className="footer__salon-info--title"
          initial={initialView}
          whileInView={whileInView}
          viewport={{ once: true, amount: 1 }}
        >
          Experience beauty with our expert salon services
        </motion.p>
        <motion.h2
          className="footer__salon-info--location"
          initial={initialView}
          whileInView={whileInView}
          viewport={{ once: true, amount: 1 }}
        >
          Location
        </motion.h2>
        <motion.a
          className="footer__salon-info--address"
          href="https://www.google.com/maps/place/Nano's+Beauty+Salon/@43.7415314,-79.5839145,17z/data=!3m1!4b1!4m6!3m5!1s0x882b3b9c72b95ccb:0xae754a015c5c7750!8m2!3d43.7415314!4d-79.5839145!16s%2Fg%2F11w37ygvfs?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          initial={initialView}
          whileInView={whileInView}
          viewport={{ once: true, amount: 1 }}
        >
          The Albion Mall, 1530 Albion Rd, Etobicoke, ON M9V 1B4
        </motion.a>
        <motion.a
          className="footer__salon-info--phone-number"
          href="tel:+14167440019"
          initial={initialView}
          whileInView={whileInView}
          viewport={{ once: true, amount: 1 }}
        >
          +1 416-744-0019
        </motion.a>
        <BookButton />

        <div className="footer__navigations">
          <motion.a
            className="footer__navigations__links"
            initial={initialView}
            whileInView={whileInView}
            viewport={{ once: true, amount: 1 }}
          >
            Services
          </motion.a>
          <motion.a
            className="footer__navigations__links"
            initial={initialView}
            whileInView={whileInView}
            viewport={{ once: true, amount: 1 }}
          >
            About Us
          </motion.a>
        </div>

        <div className="footer__social-container">
          <motion.a
            className="footer__social-container--link"
            href="https://www.instagram.com/nanosbeautysalon?igsh=enRrNGoxOWY3OTNj"
            target="_blank"
            initial={initialView}
            whileInView={whileInView}
            viewport={{ once: true, amount: 1 }}
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="footer__social-container--icon-insta"
            />
          </motion.a>
          <motion.a
            className="footer__social-container--link"
            href="https://www.tiktok.com/@nanosbeautysalon?_t=ZM-8ukAhdQyW3i&_r=1"
            target="_blank"
            initial={initialView}
            whileInView={whileInView}
            viewport={{ once: true, amount: 1 }}
          >
            <FontAwesomeIcon
              icon={faTiktok}
              className="footer__social-container--icon-tiktok"
            />
          </motion.a>
        </div>
        <div className="footer__copy-right-container">
          <motion.p
            className="footer__copy-right-container--info"
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,

              transition: {
                ease: "linear",
                duration: 1,
              },
            }}
            viewport={{ once: true, amount: 0 }}
          >
            Copyright © 2025 Nano's Beauty Salon. All rights reserved.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
