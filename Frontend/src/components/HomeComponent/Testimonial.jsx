import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Testimonial.css"; // for styling

const testimonials = [
  {
    name: "Aarav Mehta",
    image: "../images/aarav.jpg",
    text: "This platform helped me discover amazing books and connect with other readers easily.",
  },
  {
    name: "Priya Sharma",
    image: "../images/priya.jpg",
    text: "Donating my old books was never this fulfilling. So glad I found this site!",
  },
  {
    name: "Ravi Kapoor",
    image: "../images/ravi.jpg",
    text: "Affordable rentals and a friendly community. Highly recommended for students!",
  },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

const TestimonialCarousel = () => {
  const [[index, direction], setIndex] = useState([0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(([prev, _]) => [(prev + 1) % testimonials.length, 1]);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-carousel">
      <AnimatePresence custom={direction}>
        <motion.div
          key={index}
          className="testimonial-box"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6 }}
        >
          <img
            src={testimonials[index].image}
            alt={testimonials[index].name}
            className="testimonial-image"
          />
          <p className="testimonial-text">"{testimonials[index].text}"</p>
          <h4 className="testimonial-name">- {testimonials[index].name}</h4>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TestimonialCarousel;
