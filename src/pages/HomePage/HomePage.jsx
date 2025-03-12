import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import HomePageServices from "../../components/homePageServices/homePageServices";
import Gallery from "../../components/Gallery/Gallery";
import Contact from "../../components/Contact/Contact";
const HomePage = () => {
  return (
    <section>
      <Header />
      <Hero />
      <HomePageServices />
      <Gallery />
      <Contact />
    </section>
  );
};

export default HomePage;
