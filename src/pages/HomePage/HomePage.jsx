import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import HomePageServices from "../../components/homePageServices/homePageServices";
import Gallery from "../../components/Gallery/Gallery";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import AboutUsHome from "../../components/AboutUsHome/AboutUsHome";
const HomePage = () => {
  return (
    <section>
      <Header />
      <Hero />
      <HomePageServices />
      <Gallery />
      <AboutUsHome />
      <Contact />
      <Footer />
    </section>
  );
};

export default HomePage;
