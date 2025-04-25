import React from "react";
import Navbar from "../components/navbar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ShowBook = () => {
  // Image paths stored in the 'public/images/' folder
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [selectedImage, setSelectedImage] = useState(null); // Default: First image

  const backendUrl = "http://localhost:5000";

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`/api/books/${id}`);
        console.log(res.data);
        setBook(res.data);

        if (res.data.images && res.data.images.length > 0) {
          const firstImage = res.data.images[0].url.startsWith("http")
            ? res.data.images[0].url
            : `${backendUrl}/${res.data.images[0].url}`;
          setSelectedImage(firstImage);
        }
      } catch (error) {
        console.error("Error fetching book data:", error.message);
      }
    };
    fetchBook();
  }, [id]);

  return (
    <>
        <Navbar />
         
        <div className=" h-full w-full flex justify-center">








      
        <div className=" flex gap-8 m-5 p-5 w-10/12 mt-10 ">
          
          {/* This consist of the details related to books */}
          <div className=" w-6/12 h-screen p-5">
            <div>
              <h1 className="font-serif text-4xl font-medium">{book.title}</h1>
              <h3 className="text-md mt-1 font-semibold">{book.author}</h3>
            </div>


            <div className="flex gap-2 ">

             <div className="border-b-2 border-b-gray-200"> 
              <p>About The Book</p>
             </div>

             <div className="border-b-2 border-b-gray-200"> 
              <p>About The Author</p>
             </div>

            </div>








            <div className="mt-1">
              <p>{book.description}</p>
            </div>

            <div className="flex gap-2 mt-1">
              <p className="text-gray-600">Genere</p>
              <p className="font-medium">
                { book.genre?.map((g, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 px-2 py-1 rounded-full text-sm"
                  >
                    {g}
                  </span>
                ))}
              </p>
              <p><strong>Pages</strong>{book.pages}</p>
            </div>

             {/* button for rent or buy */}
            <div className="mt-5">
              <button
                className={`w-full border-2 px-4 py-2 rounded-2xl transition duration-200 ${
                  book.forRent
                    ? "border-blue-700 hover:bg-blue-700 hover:text-white"
                    : "border-green-700 hover:bg-green-700 hover:text-white"
                }`}
              >
                {book.forRent ? "Rent" : "Buy"}
              </button>
            </div>
            {/* right know i don't have this data so i'm possing it for now i will work on it letter on */}
            {/* <div className="mt-1 font-normal text-gray-600">
              <p>499pages</p>
              <p>First published October 25, 2011</p>
            </div> */}
          </div>

          {/* This is an image section */}
          <div className="flex gap-12 w-6/12 h-screen p-5">

            <div className=" h-6/8 w-3/5 py-3 flex justify-center items-center "
               style={{
                 background: "#E9D9DA"
               }}>
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="w-7/8 h-6/8 object-contain rounded-lg "
                />
              )}
            </div>

            {/* Thumbnail Section */}
            <div className="flex flex-col gap-7 space-x-3  ">
              {book.images?.map((img, index) => {
                const fullImageUrl = img.url.startsWith("http")
                ? img.url
                : `${backendUrl}/${img.url}`;
                return (
                  <img
                    key={index}
                    src={fullImageUrl}
                    alt={img.filename}
                    className={`w-27 h-27 border-2  cursor-pointer transition-transform transform ${
                      selectedImage === fullImageUrl
                        ? "border-red-100 scale-110"
                        : "border-none"
                    }`}
                    onClick={() => setSelectedImage(fullImageUrl)} // Click to update big preview
                  />
                );
              })}
            </div>

           
          </div>

          
        </div>
      </div>
    </>
  );
};

export default ShowBook;
