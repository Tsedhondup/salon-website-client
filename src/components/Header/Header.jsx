import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./Header.scss";
const Header = () => {
  const [whiteBackgroundClass, setWhiteBackgroundClass] = useState("");
  const [showButtonClass, setShowButtonClass] = useState("");
  const [hideButtonClass, setHideButtonClass] = useState("");
  const [linkClass, setLinkClass] = useState("");

  // HANDLER FUNCTIONS
  const hanldeWhiteBackgroundClass = () => {
    setWhiteBackgroundClass("white-background");
    setShowButtonClass("display-none");
    setHideButtonClass("display-block");
    setLinkClass("display-block");
  };

  const handleButtonClasses = () => {
    setShowButtonClass("");
    setHideButtonClass("");
    setLinkClass("");
  };
  return (
    <motion.section
      className={`header ${whiteBackgroundClass}`}
      initial={{
        opacity: 0,
        y: -60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 1,
        },
      }}
      viewport={{ once: true, amount: 0 }}
    >
      <section className="header__content">
        {/*  Show navigation button */}
        <div className="header__show-nav-wrapper">
          <motion.div
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
            <Link
              to="/"
              className="header__show-nav-wrapper--brand-name"
              key="02"
            >
              Nano's Beauty Salon
            </Link>
          </motion.div>

          <motion.div
            className="header__button-container"
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
            <FontAwesomeIcon
              icon={faBars}
              className={`header__show-nav-wrapper--open-button ${showButtonClass}`}
              onClick={hanldeWhiteBackgroundClass}
            />
            <FontAwesomeIcon
              icon={faXmark}
              className={`header__show-nav-wrapper--close-button ${hideButtonClass}`}
              onClick={handleButtonClasses}
            />
          </motion.div>
        </div>

        <div className={`header__links ${linkClass}`}>
          <div className="header__link-container">
            <Link to="/services" className="header__link-container--link">
              Services
            </Link>
            <a href="tel:+14167440019" className="header__link-container--link">
              Book
            </a>
            {/* <Link href="#" className="header__link-container--link">
              About Us
            </Link> */}
          </div>
        </div>
      </section>
    </motion.section>
  );
};
export default Header;
