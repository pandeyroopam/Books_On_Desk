import React from "react";
import Navbar from "../components/navbar";
import { useState } from "react";

const ShowBook = () => {
  // Image paths stored in the 'public/images/' folder
  const images = [
    "/images/front.jpeg",
    "/images/page1.png",
    "/images/page2.png",
    "/images/page3.png",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]); // Default: First image

  return (
    <>
      <Navbar />
      <div className=" h-full w-full flex justify-center">
        <div className=" flex gap-6 m-5 p-5 w-10/12 ">
          {/* This is an image section */}
          <div className=" w-4/12 h-screen p-5">
            <div>
              <h1 className="font-medium font-sans text-lg text-gray-400 mx-5">
              Thinking, Fast And Slow
              </h1>
            </div>

            <div className=" h-3/5 py-3 flex justify-center items-center ">
              <img
                src={selectedImage}
                alt="Selected"
                className="w-7/8 h-full object-cover rounded-lg shadow-lg inset-shadow-xs"
              />
            </div>

            {/* Thumbnail Section */}
            <div className="flex justify-between space-x-3 mt-2 inset-shadow-2xs shadow-xl p-2 rounded-md ">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Page ${index}`}
                  className={`w-15 h-12 border-2 rounded-md cursor-pointer transition-transform transform ${
                    selectedImage === img
                      ? "border-blue-500 scale-110"
                      : "border-gray-300"
                  }`}
                  onClick={() => setSelectedImage(img)} // Click to update big preview
                />
              ))}
            </div>

            <div className="mt-5">
              <button className="w-full border-green-700 border-2 px-4 py-2 rounded-2xl hover:bg-green-700 hover:text-white">
                Rent
              </button>
            </div>
          </div>
          {/* This consist of the details related to books */}
          <div className=" w-8/12 h-screen p-5">
            <div>
              <h1 className="font-serif text-4xl font-medium">
                Thinking, Fast And Slow
              </h1>
              <h3 className="text-2xl mt-1 font-light">Daniel Kahneman</h3>
            </div>

            <div className="mt-1">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Officia accusamus dolores minus ad. Nemo eum nam, quia dolorum
                incidunt quis asperiores omnis, praesentium quibusdam sed harum
                laborum! Quo dignissimos fuga necessitatibus facere unde
                veritatis voluptatem ullam nesciunt, quasi, magnam deserunt
                quibusdam libero, in asperiores aut esse. Quasi quaerat, saepe
                placeat magnam soluta qui quia quis hic ab impedit vero, eaque
                officia debitis aut minus odio, laborum perspiciatis commodi
                nihil id autem nobis tenetur? Commodi ducimus, repudiandae ex
                molestiae, iusto blanditiis voluptatibus quas quidem assumenda
                laudantium excepturi tenetur? Dicta doloribus sequi fuga eveniet
                dolores in commodi cumque maiores, earum velit unde.
              </p>
            </div>

            <div className="flex gap-2 mt-1">
              <p className="text-gray-600">Genere</p>
              <p className="font-medium">
                Nonfiction Psychology Self Help Business Personal Development
                Philosophy Audiobook
              </p>
            </div>
            <div className="mt-1 font-normal text-gray-600">
              <p>499pages</p>
              <p>First published October 25, 2011</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowBook;
