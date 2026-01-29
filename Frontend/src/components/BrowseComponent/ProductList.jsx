import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from '../../redux/features/cart/cartSlice';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import  GridView from "./GridView";
import  ListView from "./ListView";
import {
  StarIcon,
  BookmarkIcon,
  ShoppingCartIcon,
  ArrowPathIcon,
  FunnelIcon,
  BookOpenIcon,
} from "@heroicons/react/24/solid";

const TopOrderPage = ({products}) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("popularity");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'


  const dispatch = useDispatch();
  const handleAddToCart = (book) => {
    dispatch(addToCart(book));
  };
  const navigate = useNavigate();


  const handleBuyBook = (bookId) => {
    navigate('/checkout', { state: { books:bookId } });
  }
  const handleShowBooks = (productId) => {
    navigate(`/showbooks/${productId}`);
  };


  useEffect(() => {
    const fetchTopBooks = async () => {
      try {
        setLoading(true);
        // const response = await fetch("http://localhost:5000/api/browse");
        // const data = await response.json();

        let filteredBooks = [...products];

        if (filter !== "all") {
          if (filter === "rental") {
            filteredBooks = filteredBooks.filter(
              
              (book) => book.rentalPrice !== null
            );
          } else if (filter === "Sale") {
            filteredBooks = filteredBooks.filter(
              (book) => book.type === "Sale"
            );
          } else {
            filteredBooks = filteredBooks.filter(
              (book) => book.genre[0] === filter
            );
          }
        }

        filteredBooks.sort((a, b) => {
          if (sortBy === "popularity") return b.reviews - a.reviews;
          if (sortBy === "rating") return b.rating - a.rating;
          if (sortBy === "price-low") return a.price - b.price;
          if (sortBy === "price-high") return b.price - a.price;
          return 0;
        });

        setBooks(filteredBooks);
      } catch (error) {
        console.error("Failed to fetch books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopBooks();
  }, [filter, sortBy, products]);

   const genres = [
    "all",
    "Mystery",
    "Competetive",
    "Research",
    "Fantasy",
    "Romance",
    "Fiction",
    "Science",
    
    
  ];

  const availabilityOptions = [
    { value: "all", label: "All" },
    { value: "in-stock", label: "In Stock" },
    { value: "low-stock", label: "Low Stock" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 p-2 sm:p-4 w-full"
    >
      <div className="">

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-sm p-4 mb-6"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <FunnelIcon className="w-5 h-5 text-gray-800" />
              <span className="text-sm font-medium text-gray-700">
                Filters:
              </span>

              <div className="flex flex-wrap gap-2">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setFilter("all")}
                  className={`px-3 py-1 rounded-full text-sm ${
                    filter === "all"
                      ? "bg-red-800 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  All Books
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setFilter("rental")}
                  className={`px-3 py-1 rounded-full text-sm ${
                    filter === "rental"
                      ? "bg-red-800 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Rentals
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setFilter("sale")}
                  className={`px-3 py-1 rounded-full text-sm ${
                    filter === "sale"
                      ? "bg-red-800 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  For Sale
                </motion.button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">
                Sort by:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-red-800"
              >
                <option value="popularity">Popularity</option>
                <option value="rating">Top Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className='mt-3 flex justify-between'>

          <div className=" flex flex-wrap gap-3">
            {genres.map(
              (genre) =>
                genre !== "all" && (
                  <motion.button
                    key={genre}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setFilter(genre)}
                    className={`px-3 py-1 rounded-full text-xs ${
                      filter === genre
                        ? "bg-red-800 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {genre}
                  </motion.button>
                )
            )}
          </div>

           <div className="flex items-center space-x-2 mt-4 sm:mt-0">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-md ${
                viewMode === "grid"
                  ? "bg-red-100 text-red-900"
                  : "bg-gray-100 text-gray-900"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-md ${
                viewMode === "list"
                  ? "bg-red-100 text-red-900"
                  : "bg-gray-100 text-gray-900"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
         </div>

        </motion.div>

        {/* Content */}


        {loading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center items-center h-64"
          >
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-800"></div>
          </motion.div>
        ) : viewMode === "grid" ? (
          <div key="grid-view" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-15">
            <AnimatePresence>
              {books.map((book, index) => (
                <motion.div
                  key={book._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className=" rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
                  style={{
                background: "#E9D9DA",
              }}
                >
                    <GridView 
                    book={book}
                    onClick={() => handleShowBooks(book._id)}
                    handleAddToCart={handleAddToCart}
                    handleBuyBook={handleBuyBook} />
                    
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div key="list-view" className="space-y-4 mx-4">
            <AnimatePresence>
              {books.map((book, index) => (
                <motion.div
                  key={book.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.01 }}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all"
                >


                  <ListView 
                  book={book}
                  onClick={() => handleShowBooks(book._id)}
                  handleAddToCart={handleAddToCart}
                  handleBuyBook={handleBuyBook} 
                    />


                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {!loading && books.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-12"
          >
            <div className="bg-gray-100 p-6 rounded-full mb-4">
              <BookOpenIcon className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              No books found
            </h3>
            <p className="text-gray-800 text-center max-w-md">
              Try adjusting your filters or check back later for new arrivals
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default TopOrderPage;

