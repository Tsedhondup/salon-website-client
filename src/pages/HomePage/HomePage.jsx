import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import HomePageServices from "../../components/HomePageServices/HomePageServices";
import Gallery from "../../components/Gallery/Gallery";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import AboutUsHome from "../../components/AboutUsHome/AboutUsHome";
import HomePageServiceLists from "../../components/HomePageServiceLists/HomePageServiceLists";
import BookButton from "../../components/BookButton/BookButton";
import Testimonials from "../../components/Testimonials/Testimonials";
// import { useEffect } from "react";

const HomePage = () => {
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }, []);

  return (
    <section>
      <Header />
      <Hero />
      <HomePageServices />
      <BookButton />
      <HomePageServiceLists />
      <Testimonials /> <AboutUsHome />
      <Gallery />
      <Contact />
      <Footer />
    </section>
  );
};

export default HomePage;
