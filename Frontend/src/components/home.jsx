import React from 'react'
import './home.css';
import Navbar from '../pages/navbar'
import  Carousel from '../pages/carousel'
import Mainbody from '../pages/mainbody';
import Footer from '../pages/footer';
const home = () => {
  return (

    <>
    <div className="nav-divs">
      <Navbar/>
    </div>
    <div className="carousel-div">
    <Carousel/>
    </div>
    <div className='landing-page-body'>
      <Mainbody/>

    </div>
    <div className='Footer-div'>
      <Footer/>

    </div>
    
          

    </>
  )
}

export default home
