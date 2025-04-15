// import React, { useState, useEffect } from 'react';
// import img1 from '../images/1.jpg';
// import img2 from '../images/2.avif';
// import img3 from '../images/3.png';
// import './carousel.css';

// const images = [img1, img2, img3];

// const Carousel = () => {
//   const [index, setIndex] = useState(0);

//   const nextSlide = () => {
//     setIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="carousel-container">
//       <button className="nav left" onClick={prevSlide}>❮</button>
//       <img src={images[index]} alt={`Slide ${index + 1}`} className="carousel-img" />
//       <button className="nav right" onClick={nextSlide}>❯</button>
//     </div>
//   );
// };

// export default Carousel;


// Carousel.js
import React, { useEffect, useState } from "react";
import Slides from "./carouselDiv";
import "./Carousel.css";

const Carousel = () => {
  const slides = Slides();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000); // change every 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slide">{slides[current]}</div>

      <button className="nav left" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="nav right" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
