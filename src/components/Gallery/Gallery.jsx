import "./Gallery.scss";
import BookButton from "../BookButton/BookButton";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import image2 from "../../assets/images/g2.jpeg";
import image3 from "../../assets/images/g3.jpeg";
import image4 from "../../assets/images/client1.jpeg";
import pic1 from "../../assets/images/pic1.jpeg";
import pic2 from "../../assets/images/pic2.jpeg";
import pic3 from "../../assets/images/pic3.jpeg";
import pic7 from "../../assets/images/pic7.jpeg";
import pic8 from "../../assets/images/pic8.jpeg";
import pic9 from "../../assets/images/pic9.jpeg";
import pic5 from "../../assets/images/pic5.jpeg";
import pic4 from "../../assets/images/pic4.jpeg";

const Gallery = () => {
  const images = [
    pic9,
    pic8,
    image3,
    pic7,
    pic1,

    pic2,
    pic3,
    image4,

    pic4,
    pic5,
  ];
  let animationDuration = 0.3;
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
    <section className="gallery">
      <motion.h2
        className="gallery__header"
        initial={initialView}
        whileInView={whileInView}
        viewport={{ once: true, amount: 1 }}
      >
        Nano's Gallery
      </motion.h2>
      <div className="gallery__image-container">
        {images.map((item) => {
          const imageEl = (
            <motion.img
              key={item}
              className="gallery__image-container--image"
              src={item}
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                  ease: "linear",
                  duration: animationDuration,
                },
              }}
              viewport={{ once: true, amount: 1 }}
            />
          );
          animationDuration = animationDuration + 0.1;
          return imageEl;
        })}
      </div>
      <BookButton />
    </section>
  );
};
export default Gallery;
