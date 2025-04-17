import React from "react";
import "./home.css";
import Navbar from "../components/navbar";
import Carousels from "../components/Carousels";
import Mainbody from "../components/mainbody";
import Footer from "../components/footer";
import FormSection from "../components/formSection";
const home = () => {
  return (
    <>
        <Navbar />
      <div className="carousel-div">
        <Carousels />
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

export default home;
