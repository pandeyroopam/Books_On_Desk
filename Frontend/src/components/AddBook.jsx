import React from "react";
import Navbar from "../pages/navbar";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
 
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:8080/books", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if(!response.ok){
        throw new Error("Network response was not ok");
      }
       alert("Book details added successfully");
        navigate("/ShowBook");
         
    } catch (error) {
      alert("Error in adding the book details", error.message);
    }
  };
  return (
    <>
      <Navbar />

      <div className="h-full w-full flex items-center m-5 flex-col">
        {/* form for taking input of the user about the book */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-8/12 shadow-lg border-gray-100 border-2 rounded-md p-5 m-2"
        >
          <h2 className="text-xl text-center font-bold">
            Add your Book details
          </h2>

          <div>c
            <label className="my-0.5 text-lg font-medium">ISBN Number</label>
            <input
              type="text"
              className="mx-2 outline-gray-400 rounded-md"
              placeholder="Enter your book Isbn number"
              {...register("isbn", { required: true })}
            />
            {errors.isbn && (
              <div className="text-red-500">Enter a valid isbn name</div>
            )}
          </div>

          <div className="my-4">
            <input type="file" accept="image/*" capture="environment" />
            <button
              type="button"
              className="ml-2 p-1 bg-blue-500 text-white rounded-md"
            >
              Upload
            </button>
          </div>

          <div className="my-4">
            <label className="my-0.5 text-lg font-medium">Summary</label>
            <textarea
              className="w-full p-2 border-2 border-gray-400 outline-gray-400 rounded-md"
              {...register("description", {
                required: true,
                minLength: 10,
                maxLength: 100,
              })}
            />
            {errors.description && (
              <div className="text-red-500">Enter a valid description</div>
            )}
          </div>

          <div className="flex gap-20 my-4">
            <div>
              <label className="text-lg font-medium">Author</label>
              <input
                className="border-gray-400 outline-gray-400 rounded-md"
                type="text"
                {...register("author", { required: true })}
              />
              {errors.author && (
                <div className="text-red-500">Enter a valid author name</div>
              )}
            </div>

            <div>
              <label className="text-lg font-medium">Book Title</label>
              <input
                className="border-gray-400 outline-gray-400 rounded-md"
                type="text"
                {...register("title", { required: true })}
              />
              {errors.title && (
                <div className="text-red-500">Enter a valid Book Title</div>
              )}
            </div>
          </div>

          <div className="flex gap-20 my-4">
            <div className="my-4">
              <label className="text-lg font-medium">Price</label>
              <input
                className="border-gray-400 outline-gray-400 rounded-md"
                type="text"
                placeholder="Enter the valid price"
                {...register("price")}
              />
              {errors.price && (
                <div className="text-red-500">Enter a valid price</div>
              )}
            </div>

            <div className="my-4">
              <label className="text-lg font-medium">Genre</label>
              <input
                className="border-gray-400 outline-gray-400 rounded-md"
                type="text"
                {...register("genre", { required: true })}
              />
              {errors.genre && (
                <div className="text-red-500">Enter a valid genre</div>
              )}
            </div>

            <div className="my-4">
              <label className="text-lg font-medium">Book Condition</label>
              <select
                className="mx-2 outline-gray-400 rounded-md"
                {...register("condition")}
              >
                <option value="New">New</option>
                <option value="Good">Good</option>
                <option value="Average">Average</option>
              </select>
              {errors.condition && (
                <div className="text-red-500">Select one of the option</div>
              )}
            </div>
          </div>

          <div className="my-4">
            <label className="text-lg font-medium">Location</label>
            <input
              className="border-gray-400 outline-gray-400 rounded-md"
              type="text"
              {...register("location", {
                required: true,
                minLength: 5,
                maxLength: 50,
              })}
            />
            {errors.location && (
              <div className="text-red-500 ">Enter a valid location</div>
            )}
          </div>
          <div className="my-4 flex justify-center">
            <input
              type="submit"
              className="p-4 w-40 bg-green-500 text-white rounded-md cursor-pointer font-semibold"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddBook;
