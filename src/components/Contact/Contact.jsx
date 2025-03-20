import "./Contact.scss";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <motion.section
      className="contacts"
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          ease: "linear",
          duration: 0.5,
        },
      }}
      viewport={{ once: true, amount: 1 }}
    >
      <section className="contacts__content1">
        {" "}
        <motion.section
          className="contacts__content"
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
          <motion.h2
            className="contacts__header"
            initial={{
              opacity: 0,
              y: 60,
              borderWidth: "0px",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              borderWidth: "1px",
              transition: {
                ease: "linear",
                duration: 0.5,
                borderWidth: { delay: 1 },
              },
            }}
            viewport={{ once: true, amount: 1 }}
          >
            Get in touch
          </motion.h2>
          <motion.p
            className="contacts__booking-info"
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                ease: "linear",
                duration: 0.5,
              },
            }}
            viewport={{ once: true, amount: 1 }}
          >
            For reservation and any other inquiries, Please call us directly at
            <motion.a
              className="contacts__booking-info--phone-number"
              href="tel:+14167440019"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
                borderWidth: "1px",
                transition: {
                  ease: "linear",
                  duration: 0.5,
                  delay: 0.8,
                },
              }}
              viewport={{ once: true, amount: 1 }}
            >
              +1 416-744-0019
            </motion.a>
          </motion.p>
        </motion.section>
      </section>
    </motion.section>
  );
};
export default Contact;
