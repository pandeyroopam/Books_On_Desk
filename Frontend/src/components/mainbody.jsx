import React from "react";
import BookCarousel from "./bookCarousel";
import "./mainbody.css";
const Mainbody = () => {
  return (
    <>

    <div className="main-body">

        <div className="main-about">
            <p className="main-title"> ABOUT </p>

            <div className="about-container">
            <div className="about">
                <div className="about-img  img1">
                
                </div>
                <p className="img-title">
                    READ BOOK
                </p> 
                <p>
                    Get yourself a book and live yourlife as book lover. we land you hand that will provide you books that you want to read at a minimal amount.Boost you passion as book lover.
                </p>
            </div>
            <div className="about">
                <div className="about-img img2">
                    
                </div>
                <p className="img-title">
                    BOOK RENTING
                </p> 
                <p>
                    Get yourself a book and live yourlife as book lover. we land you hand that will provide you books that you want to read at a minimal amount.Boost you passion as book lover.
                </p>


            </div>
            <div className="about">
                <div className="about-img img3">
                    
                </div>

                <p className="img-title">
                    EARN MONEY
                </p> 
                <p>
                    Get yourself a book and live yourlife as book lover. we land you hand that will provide you books that you want to read at a minimal amount.Boost you passion as book lover.
                </p>
            </div>

            </div>
            


        </div>

        <div className="book-novel book-cat">
            <a href="#novel" className="book-cat-name"> NOVEL</a>
            <BookCarousel/>

        </div>

        <div className="educational-book book-cat">
            <a href="#eduBook" className="book-cat-name"> EDUCATIONAL BOOK</a>
            <BookCarousel/>

        </div>

        <div className="trending-book  book-cat">
            <a href = "#trend" className="book-cat-name">TREANDING BOOKS</a>
            <BookCarousel/>

        </div>

        <div className="main-about">
        <p className="main-title"> Services We Are Providing! </p>

<div className="about-container">
<div className="about">
    <div className="about-img  img4">
    
    </div>
    <p className="img-title">
        FREE SHIPPING
    </p> 
    <p>
        Get yourself a book and live yourlife as book lover. we land you hand that will provide you books that you want to read at a minimal amount.Boost you passion as book lover.
    </p>
</div>
<div className="about">
    <div className="about-img img5">
        
    </div>
    <p className="img-title">
        BUILD YOUR COMMUNITY
    </p> 
    <p>
        Get yourself a book and live yourlife as book lover. we land you hand that will provide you books that you want to read at a minimal amount.Boost you passion as book lover.
    </p>


</div>
<div className="about">
    <div className="about-img img6">
        
    </div>

    <p className="img-title">
        USER LISTING
    </p> 
    <p>
        Get yourself a book and live yourlife as book lover. we land you hand that will provide you books that you want to read at a minimal amount.Boost you passion as book lover.
    </p>
</div>

</div>

            


        </div>

       
    </div>
    
    
    
    </>

  )
}
export default Mainbody;