import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
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
      }}
      whileInView={{
        opacity: 1,
        transition: {
          ease: "linear",
          duration: 0.5,
          delay: 1.5,
        },
      }}
      viewport={{ once: true, amount: 1 }}
    >
      {/*  Show navigation button */}
      <div className="header__show-nav-wrapper">
        <motion.h2
          className="header__show-nav-wrapper--brand-name"
          key="02"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              ease: "linear",
              duration: 0.5,
              delay: 2,
            },
          }}
          viewport={{ once: true, amount: 1 }}
        >
          Nano's Beauty Salon
        </motion.h2>
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
              delay: 2,
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
          <a href="#" className="header__link-container--link">
            Services
          </a>
          <a href="#" className="header__link-container--link">
            Contact
          </a>
          <a href="#" className="header__link-container--link">
            About Us
          </a>
        </div>
      </div>
      <div className="header__birth-location">
        <motion.h2
          className="header__birth-location--item"
          initial={{
            opacity: 0,
            // y: -60,
          }}
          whileInView={{
            opacity: 1,
            // y: 0,
            transition: {
              ease: "linear",
              duration: 0.5,
              delay: 2,
            },
          }}
          viewport={{ once: true, amount: 1 }}
        >
          Since 2022
        </motion.h2>
        <motion.h2
          className="header__birth-location--item"
          initial={{
            opacity: 0,
            // x: 60,
          }}
          whileInView={{
            opacity: 1,
            // x: 0,
            transition: {
              ease: "easeIn",
              duration: 0.5,
              delay: 2,
            },
          }}
          viewport={{ once: true, amount: 1 }}
        >
          1530 Albion Rd, Etobicoke
        </motion.h2>
      </div>
    </motion.section>
  );
};
export default Header;
