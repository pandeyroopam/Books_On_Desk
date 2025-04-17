import Navbar from "../components/navbar";
import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { useState } from "react";
import ImageUploader from "../components/ImageUploader";
import { useNavigate } from "react-router-dom";

const genreOptions = [
  { value: "Fiction", label: "Fiction" },
  { value: "Romance", label: "Romance" },
  { value: "Mystery", label: "Mystery" },
  { value: "Science", label: "Science" },
  { value: "History", label: "History" },
  { value: "Fantasy", label: "Fantasy" },
];

// import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const navigate = useNavigate();

  
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        // console.log(token)

      }
    }, []);
  // const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();

  const [files, setFiles] = useState([]);

  return (
    <>
      <Navbar />

      <div className=" flex items-center flex-col">
        {/* form for taking input of the user about the book */}
        <form
          style={{
            background:
              "linear-gradient(0deg, rgba(209,243,255,1) 0%, rgba(255,255,255,1) 49%, rgba(199,241,255,1) 100%)",
          }}
          // onSubmit={handleSubmit(onSubmit)}
          className="w-8/12 shadow-lg border-gray-100 border-2 rounded-md p-5 m-2"
        >
          <h2 className="text-xl text-center font-bold">
            Add your Book details
          </h2>

          <ImageUploader/>

          {/* Book description */}
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

          {/*  Author name              */}
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

            {/* Book title */}
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

          <div className="flex gap-20 my-1">
            {/* Book price */}
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

            {/* isbn number */}
            <div className="my-4">
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
                {...register("condition1")}
              >
                <option value="">-- Select --</option>
                <option value="New">Rent</option>
                <option value="Good">Sell</option>
              </select>
              {errors.condition1 && (
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
