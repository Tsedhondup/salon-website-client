import "./Header.scss";
const Header = () => {
  return (
    <section className="header">
      {/* Before scroll up */}
      <section className="header__before-scroll">
        <h2 className="header__before-scroll--birth-year">since 2022</h2>
        <h2 className="header__before-scroll--address-top">
          1530 Albion Rd, Etobicoke,
          <span className="header__before-scroll--postal-code"> ON M9V 1B4</span>
        </h2>
      </section>
      {/* After scroll up */}
      <section className="header__after-scroll">
        <div className="header-links">
          <h3 className="header-links__merchant-name">Nano's Beauty Salon</h3>
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
    </section>
  );
};
export default Header;
