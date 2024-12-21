import "../App.css";
import Footer from "../components/Footer";
import { DesignProcess } from "../components/Landingsection/DesignProcess";
import DoubleDiamond from "../components/Landingsection/DoubleDiamond";
import Experience from "../components/Landingsection/Experience";
import Faq from "../components/Landingsection/Faq";
import HeroSection from "../components/Landingsection/HeroSection";
import Projects from "../components/Landingsection/Projects";
import Skills from "../components/Landingsection/Skills";
import Testimonial from "../components/Landingsection/Testimonial";
import Tools from "../components/Landingsection/Tools";
const LandingPage = () => {
  return (
    <div className="container__wrapper pt-20">
      <div className="">
        <HeroSection />
        <Projects />
        <Tools />
        <Testimonial />
        <Skills />
        <Experience />
        <DoubleDiamond/>
        <DesignProcess/>
        <Faq/>
        <Footer/>
      </div>
    </div>
  );
};

export default LandingPage;
