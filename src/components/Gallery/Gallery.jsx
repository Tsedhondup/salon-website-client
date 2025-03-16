import "./Gallery.scss";
import image1 from "../../assets/images/g1.jpeg";
import image2 from "../../assets/images/g2.jpeg";
import image3 from "../../assets/images/g3.jpeg";
import image4 from "../../assets/images/client1.jpeg";

const Gallery = () => {
  const images = [image1, image2, image3, image4];
  return (
    <section>
      <h2>Nano's Gallery</h2>
      <div>
        <img />
        <img />
        <img />
        <img />
        <img />
        <img />
        <img />
        <img />
      </div>
    </section>
  );
};
export default Gallery;
