import "./Contact.scss";
const Contact = () => {
  return (
    <section className="contacts">
      <section className="contacts__content">
        <h2 className="contacts__header">Get in touch</h2>
        <p className="contacts__booking-info">
          For reservation and any other inquiries, Please call us directly at
          <a className="contacts__booking-info--phone-number">
            +1 416-744-0019
          </a>
        </p>
      </section>
    </section>
  );
};
export default Contact;
