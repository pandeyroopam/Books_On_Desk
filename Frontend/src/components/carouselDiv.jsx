// Slides.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./CarouselDiv.css"
const Slides = () => {

    const handleLogin = () => {
            const navigate = useNavigate();
            navigate("/Login"); // This will redirect to the login page
    }

  return [
    <div className="slide red" key="1">
        <div className="text-content">
            <p className="browse-heading">Explore Books That Matter</p>
            <p className="browse-content">
            “Thousands of books. Endless journeys. Begin yours today.”  <br />
            “Don’t just read—discover. Every browse opens a new world.” <br />
            “Books you need. Stories you’ll love. All in one place.”
            </p>

        </div>
        <div className="img-content"> 

        </div>
    </div>,
    <div className="slide green" key="2">
         <div className="text-content">
            <p className="browse-heading">Share, Sell, or Rent</p>
            <p className="browse-content">
            “Own books? Turn them into opportunities—rent or sell effortlessly.”  <br />
            “Your shelf could be someone’s treasure. List your books in seconds.” <br />
            “Let your books keep moving—share stories, earn smartly.”
            </p>

        </div>
        <div className="btn-content"> 
            <div className="connect-img">

            </div>
            <button className="btn1 btn" onClick={handleLogin}>
                log in
            </button>   
            <button className="btn2 btn">
                Sign Up
            </button>

        </div>


    </div>,
    <div className="slide blue" key="3">
         <div className="text-content">
            <p className="browse-heading">Read. Connect. Belong.</p>
            <p className="browse-content">
            “More than readers—we’re a movement. Join the story.” <br />
            “Find your book tribe. Share notes, swap ideas, grow together.” <br />
            “Genres connect us, stories unite us—build your reader circle here.”
            </p>

        </div>
        <div className="img-content image2"> 

        </div>
    </div>,
  ];
};

export default Slides;
