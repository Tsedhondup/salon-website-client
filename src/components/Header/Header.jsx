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
    <section className={`header ${whiteBackgroundClass}`}>
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
              duration: 1,
              delay: 1,
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
              duration: 1,
              delay: 1.5,
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
        <h2 className="header__birth-location--item">
          1530 Albion Rd, Etobicoke
        </h2>
        <h2 className="header__birth-location--item">Since 2022</h2>
      </div>
    </section>
  );
};
export default Header;
