import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import HomePageServices from "../../components/HomePageServices/HomePageServices";
import Gallery from "../../components/Gallery/Gallery";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import AboutUsHome from "../../components/AboutUsHome/AboutUsHome";
const HomePage = () => {
  return (
    <section>
      <Header />
      <Hero />
      <AboutUsHome />
      <HomePageServices />
      <Gallery />
      <Contact />
      <Footer />
    </section>
  );
};

export default HomePage;
