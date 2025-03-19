import Header from "../../components/Header/Header";
import MainServices from "../../components/MainServices/MainServices";
import Gallery from "../../components/Gallery/Gallery";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";
const ServicePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Header />
      <MainServices />
      <Gallery />
      <Footer />
    </>
  );
};
export default ServicePage;
