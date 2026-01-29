// import React from "react";
// import "./bookCarousel.css";
// import { useNavigate } from "react-router-dom";

// const BookCarousel = () => {

//     const navigate = useNavigate();

//   const handleShowBooks = () => {
//     navigate("/showbooks"); // This will redirect to the ShowBooks page
//   };

//   const handleBrowser = () => {
//     navigate("/Browse"); // This will redirect to the Browser page
//   }

//   return (
//     <>
//         <div>
            
//             <div className="book-div">
//                     <div className="book-container" >
//                         <div className="book-itself book1" onClick={handleShowBooks}>
//                         <div className="book-itself-card"> Samantha McCoy’s future was perfectly planned—until a rare disease threatened to erase her memories before it could begin. </div>
                            
//                         </div>
//                         <div className="book-info">
//                              <button className="book-btn" onClick={handleShowBooks}>Rent</button>
//                              <button className="book-btn" onClick={handleShowBooks}>Buy </button>

//                         </div>
                        

//                     </div>
//                     <div className="book-container ">
//                             <div className="book-itself book2" onClick={handleShowBooks}>
//                             <div className="book-itself-card"> Never-Ending Sky brings to life the struggles and hopes of immigrants in New York’s tenements, told through powerful stories of resilience, dreams, and survival.

// </div>
                            
//                             </div>
//                             <div className="book-info">
//                                 <button className="book-btn" onClick={handleShowBooks}>Rent</button>
//                                 <button className="book-btn" onClick={handleShowBooks}>Buy </button>

//                             </div>

//                     </div>
//                     <div className="book-container ">
//                            <div className="book-itself book3" onClick={handleShowBooks}>
//                            <div className="book-itself-card"> Soul is a haunting exploration of love, loss, and identity, as one woman unravels the ties between who she was and who she’s becoming in the wake of heartbreak. </div>
                            
//                             </div>
//                             <div className="book-info">
//                                 <button className="book-btn" onClick={handleShowBooks}>Rent</button>
//                                 <button className="book-btn" onClick={handleShowBooks}>Buy </button>

//                             </div>
                            
//                     </div>
//                     <div className="book-container ">
//                             <div className="book-itself book4" onClick={handleShowBooks}>
//                             <div className="book-itself-card"> The Key Master follows a boy who discovers a mysterious key that unlocks hidden worlds—each one more dangerous and magical than the last. </div>
                            
//                             </div> 
//                             <div className="book-info">
//                                 <button className="book-btn" onClick={handleShowBooks}>Rent</button>
//                                 <button className="book-btn" onClick={handleShowBooks}>Buy </button>

//                             </div>

//                     </div>
//                     <div className="book-container ">
//                             <div className="book-itself book5" onClick={handleShowBooks}>
//                             <div className="book-itself-card"> All That Life Can Afford is a tender story of ambition, sacrifice, and self-discovery as a young woman navigates love and identity in a city full of promise—and secrets. </div>
                            
//                             </div>  
//                             <div className="book-info">
//                                 <button className="book-btn" onClick={handleShowBooks}>Rent</button>
//                                 <button className="book-btn" onClick={handleShowBooks}>Buy </button>

//                             </div>

//                     </div>
//                     <div className="book-container ">
//                             <div className="book-itself book6" onClick={handleShowBooks}>
//                             <div className="book-itself-card"> The Boy with Tiger’s Heart tells the tale of a fearless boy with a wild spirit, caught between the call of the jungle and the world that fears his strength. </div>
                            
//                             </div> 
//                             <div className="book-info">
//                                 <button className="book-btn" onClick={handleShowBooks}>Rent</button>
//                                 <button className="book-btn" onClick={handleShowBooks}>Buy </button>

//                             </div>

//                     </div>
//                     <div className="nav-container ">
//                           <div className="nav-box" >
//                                 <button className="nav-button" onClick={handleBrowser}>   &#10095; </button>

//                           </div>

//                     </div>

//                 </div>

//             </div>
      
//     </>
//   )
// }

// export default BookCarousel;



import React, { useState } from "react";
import "./bookCarousel.css";

const BookCarousel = () => {
  const [liked, setLiked] = useState([false, false, false, false]);

  const toggleLike = (index) => {
    const updatedLikes = [...liked];
    updatedLikes[index] = !updatedLikes[index];
    setLiked(updatedLikes);
  };

  return (
    <>
      <div>
        <div className="book-div">
          <div className="book-container ">
            <div className="book-itself book1">
              <div className="book-itself-card">
                <button
                  className="like-button"
                  onClick={() => toggleLike(0)}
                >
                  {liked[0] ? "❤️" : "🤍"}
                </button>
                Samantha McCoy’s future was perfectly planned—until a rare disease threatened to erase her memories before it could begin.
              </div>
            </div>
            <div className="book-info">
              <p className="book-name">The Imperfection Of Memory</p>
              <p id="book-rating">Google rating: 9.2 </p>
            </div>
          </div>

          <div className="book-container ">
            <div className="book-itself book2">
              <div className="book-itself-card">
                <button
                  className="like-button"
                  onClick={() => toggleLike(1)}
                >
                  {liked[1] ? "❤️" : "🤍"}
                </button>
                Never-Ending Sky brings to life the struggles and hopes of immigrants in New York’s tenements, told through powerful stories of resilience, dreams, and survival.
              </div>
            </div>
            <div className="book-info">
              <p className="book-name">Never Ending Sky</p>
              <p id="book-rating">Google rating: 8.8</p>
            </div>
          </div>

          <div className="book-container ">
            <div className="book-itself book3">
              <div className="book-itself-card">
                <button
                  className="like-button"
                  onClick={() => toggleLike(2)}
                >
                  {liked[2] ? "❤️" : "🤍"}
                </button>
                Soul is a haunting exploration of love, loss, and identity, as one woman unravels the ties between who she was and who she’s becoming in the wake of heartbreak.
              </div>
            </div>
            <div className="book-info">
              <p className="book-name">Soul</p>
              <p id="book-rating">Google rating: 9 </p>
            </div>
          </div>

          <div className="book-container ">
            <div className="book-itself book4">
              <div className="book-itself-card">
                <button
                  className="like-button"
                  onClick={() => toggleLike(3)}
                >
                  {liked[3] ? "❤️" : "🤍"}
                </button>
                The Key Master follows a boy who discovers a mysterious key that unlocks hidden worlds—each one more dangerous and magical than the last.
              </div>
            </div>
            <div className="book-info">
              <p className="book-name">The Keymasters</p>
              <p id="book-rating">Google rating: 8.9 </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookCarousel;
