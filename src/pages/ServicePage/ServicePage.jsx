import Header from "../../components/Header/Header";
import MainServices from "../../components/MainServices/MainServices";
import Gallery from "../../components/Gallery/Gallery";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";
const ServicePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Header />
      <MainServices /> <Gallery />
      <Contact />
      <Footer />
    </>
  );
};
export default ServicePage;
