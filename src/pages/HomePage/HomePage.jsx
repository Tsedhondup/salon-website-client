import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import HomePageServices from "../../components/HomePageServices/HomePageServices";
import Gallery from "../../components/Gallery/Gallery";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import AboutUsHome from "../../components/AboutUsHome/AboutUsHome";
import HomePageServiceLists from "../../components/HomePageServiceLists/HomePageServiceLists";
const HomePage = () => {
  return (
    <section>
      <Header />
      <Hero />
      <AboutUsHome />
      <HomePageServices />
      <HomePageServiceLists />
      {/* <Gallery /> */}
      <Contact />
      <Footer />
    </section>
  );
};

export default HomePage;
