import "./Gallery.scss";
import BookButton from "../BookButton/BookButton";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import image1 from "../../assets/images/g1.jpeg";
import image2 from "../../assets/images/g2.jpeg";
import image3 from "../../assets/images/g3.jpeg";
import image4 from "../../assets/images/client1.jpeg";

const Gallery = () => {
  const images = [image1, image2, image3, image4];
  let animationDuration = 0.3;
  return (
    <section className="gallery">
      <h2 className="gallery__header">Nano's Gallery</h2>
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
