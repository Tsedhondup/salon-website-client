import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./Header.scss";
const Header = () => {
  // HANDLER FUNCTIONS
  const hanldeWhiteBackgroundClass = () => {
    setWhiteBackgroundClass("white-background");
  };
  const [whiteBackgroundClass, setWhiteBackgroundClass] = useState("");
  return (
    <section className={`header ${whiteBackgroundClass}`}>
      {/*  Show navigation button */}
      <div className="header__show-nav-wrapper">
        <h2 className="header__show-nav-wrapper--brand-name">
          Nano's Beauty Salon
        </h2>
        <FontAwesomeIcon
          icon={faBars}
          className="header__show-nav-wrapper--button"
          onClick={hanldeWhiteBackgroundClass}
        />
      </div>

      <div className="header-links">
        <div className="heade-links__link-container">
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
    </section>
  );
};
export default Header;
