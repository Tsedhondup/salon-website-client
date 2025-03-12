import "./Header.scss";
const Header = () => {
  return (
    <section className="header">
      {/* Before scroll up */}
      <section>
        {/* Salon history  */}
        <h2>since 2022</h2>
        {/* Salon Location */}
        <div>1530 Albion Rd, Etobicoke, ON M9V 1B4</div>
      </section>
      {/* After scroll up */}
      <section>
        <div>
          <h3>Nano's Beauty Salon</h3>
          <div>
            <a href="#">Services</a>
            <a href="#">Contact</a>
            <a href="#">About Us</a>
          </div>
        </div>
      </section>
    </section>
  );
};
export default Header;
