import Navbar from "../components/navbar";
import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { useState } from "react";
import ImageUploader from "../components/ImageUploader";
import { useNavigate } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import Img from "../assets/images/1.jpeg";

import axios from "axios";

const genreOptions = [
  { value: "Fiction", label: "Fiction" },
  { value: "Romance", label: "Romance" },
  { value: "Mystery", label: "Mystery" },
  { value: "Science", label: "Science" },
  { value: "History", label: "History" },
  { value: "Fantasy", label: "Fantasy" },
];

// This component is used to add a book to the database
const AddBook = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    getValues,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  // 9788173711466  in the given isbn place the value that you fetch from the frontend isbn

  const [files, setFiles] = useState([]);
  const [images, setImages] = useState([]);
  const [apiThumbnail, setApiThumbnail] = useState(""); // 👈 new state to track API thumbnail

  // const key = AIzaSyBfO-Uet3ZbMeTXqkQmUgIqhvPlimIXX5Q;

  const onSubmit = async (data) => {
    const formData = new FormData();
    if (apiThumbnail) {
      formData.append("thumbnailUrl", apiThumbnail); // 👈 send URL separately
    }
    formData.append("description", data.description);
    formData.append("author", data.author);
    formData.append("title", data.title);
    formData.append("pages", data.pages);
    formData.append("price", data.price);
    formData.append("isbn", data.isbn);
    formData.append("condition", data.condition);
    formData.append("condition1", data.condition1);

    const selectedGenres = data.genre?.map((g) => g.value) || [];
    selectedGenres.forEach((genre) => formData.append("genre[]", genre));

    images.forEach((image) => {
      formData.append("images", image);
    });

    try {
      const res = await axios.post("/api/books", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Response:", res.data);
      alert("Book submitted successfully!");
      navigate("/Browse");
    } catch (err) {
      console.error("Upload error:", err);
      alert("Failed to submit book!");
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const isbn = getValues("isbn");
    if (!isbn) {
      alert("Please enter the isbn number");
      return;
    }

    const Key = process.env;
    console.log(isbn);
    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=Key`;

    );
    const response = `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`;
    console.log(res.data);
    console.log(response);
    const bookData = res.data.items?.[0]?.volumeInfo;
    if (bookData) {
      setValue("title", bookData.title || "");
      setValue("author", bookData.authors?.[0] || "");
      setValue("description", bookData.description || "");
      setValue(
        "genre",
        bookData.categories?.map((gen) => ({ value: gen, label: gen })) || []
      );
      setValue("pages", bookData.pageCount || "");
      if (response) {
        setApiThumbnail(response); // 👈 save URL to state
      }
    }
  };

  return (
    <>
      <Navbar />

      <div className=" flex items-center flex-col">
        {/* form for taking input of the user about the book */}
        <form
          style={{
            background:
              "#E9D9DA",
          }}
          onSubmit={handleSubmit(onSubmit)}
          className="w-8/12 shadow-lg border-gray-100 border-2 rounded-md p-5 m-2"
        >
          <h2 className="text-xl text-center font-bold">
            Add your Book details
          </h2>

          <ImageUploader images={images} setImages={setImages} />

           {/* thumbnail image */}
           {apiThumbnail && (
            <div className="border-2 border-black w-20 h-32 mb-4">
              <img
                src={apiThumbnail}
                alt="Thumbnail Preview"
                className="object-cover w-full h-full border"
              />
            </div>
          )}

         

          {/* Book description */}
          <div className="my-4">
            <label className="my-0.5 text-lg font-medium">Summary</label>
            <textarea
              className="w-full p-2 border-2 border-gray-400 outline-gray-400 rounded-md"
              {...register("description", {
                required: true,
                minLength: 10,
                maxLength: 1000,
              })}
            />
            {errors.description && (
              <div className="text-red-500">Enter a valid description</div>
            )}
          </div>

          {/*  Author name              */}
          <div className="flex gap-20 my-4">
            <div>
              <label className="text-lg font-medium">Author</label>
              <input
                className="border-gray-400 border-2 outline-gray-400 rounded-md"
                type="text"
                {...register("author", { required: true })}
              />
              {errors.author && (
                <div className="text-red-500">Enter a valid author name</div>
              )}
            </div>

            {/* Book title */}
            <div>
              <label className="text-lg font-medium">Book Title</label>
              <input
                className="border-gray-400 border-2 outline-gray-400 rounded-md"
                type="text"
                {...register("title", { required: true })}
              />
              {errors.title && (
                <div className="text-red-500">Enter a valid Book Title</div>
              )}
            </div>
            {/* Number of pages in book */}
            <div>
              <label className="text-lg font-medium">Number of Pages</label>
              <input
                className="border-gray-400 border-2 outline-gray-400 rounded-md"
                type="number"
                {...register("pages", { required: true })}
              />
              {errors.pages && (
                <div className="text-red-500">
                  Enter a valid number of pages
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-20 my-1">
            {/* Book price */}
            <div className="my-4">
              <label className="text-lg font-medium">Price</label>
              <input
                className="border-gray-400 border-2 outline-gray-400 rounded-md"
                type="number"
                placeholder="Enter the valid price"
                {...register("price")}
              />
              {errors.price && (
                <div className="text-red-500">Enter a valid price</div>
              )}
            </div>

            {/* isbn number */}
            <div className="my-4">
              <label className="my-0.5 text-lg font-medium">ISBN Number</label>
              <div className="flex border-2 border-gray-400 rounded-md">
                <input
                  type="text"
                  className="outline-none rounded-md"
                  placeholder="Enter your book Isbn number"
                  {...register("isbn", { required: true })}
                />
                <button
                  type="button"
                  className="bg-blue-500 text-white rounded-md p-2 ml-2"
                  onClick={handleSearch}
                >
                  <IoMdSearch />
                </button>
              </div>
              {errors.isbn && (
                <div className="text-red-500">Enter a valid isbn name</div>
              )}
            </div>
          </div>

          {/* Book genre */}
          <div className="my-4 w-full">
            <label className="text-lg font-medium">Genre</label>
            <Controller
              name="genre"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  {...field}
                  isMulti
                  options={genreOptions}
                  className="mt-2"
                  classNamePrefix="select"
                />
              )}
            />
            {errors.genre && (
              <p className="text-red-500 text-sm">
                Please select at least one genre
              </p>
            )}
          </div>

          <div className="flex gap-20 my-1">
            {/* Book condition */}
            <div className="my-4">
              <label className="text-lg font-medium">Book Condition</label>
              <select
                className="m-2 p-2 outline-gray-400 rounded-md"
                {...register("condition")}
              >
                <option value="">-- Select --</option>
                <option value="New">New</option>
                <option value="Good">Good</option>
                <option value="Average">Average</option>
              </select>
              {errors.condition && (
                <div className="text-red-500">Select one of the option</div>
              )}
            </div>

            {/* for sell and rent option */}
            <div className="my-4">
              <label className="text-lg font-medium">Listing Type</label>
              <select
                className="m-2 p-2 outline-gray-400 rounded-md"
                {...register("forSale")}
              >
                <option value="">-- Select --</option>
                <option value="rent">Rent</option>
                <option value="sell">Sell</option>
              </select>
              {errors.forSale && (
                <div className="text-red-500">Select one of the option</div>
              )}
            </div>
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
