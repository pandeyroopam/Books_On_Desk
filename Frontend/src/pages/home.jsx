import React from "react";
import "./Home.css";
import Navbar from "../components/navbar";
import Carousel from "../components/carousel";
import Mainbody from "../components/mainbody";
import Footer from "../components/footer";
import FormSection from "../components/formSection";
const Home = () => {
  return (
    <>
      <div className="nav-divs">
        <Navbar />
      </div>
      <div className="carousel-div">
        <Carousel />
      </div>
      <div className="landing-page-body">
        <Mainbody />
      </div>
      <div className="form-input">
        <FormSection />
      </div>
      <div className="Footer-div">
        <Footer />
      </div>
    </>
  );
};

export default Home;
