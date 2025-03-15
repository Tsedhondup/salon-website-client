import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
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
        <h2 className="header__show-nav-wrapper--brand-name">
          Nano's Beauty Salon
        </h2>
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
        {" "}
        <h2 className="header__birth-location--item">
          1530 Albion Rd, Etobicoke
        </h2>
        <h2 className="header__birth-location--item">Since 2022</h2>
      </div>
    </section>
  );
};
export default Header;
