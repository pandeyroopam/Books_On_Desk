import React from 'react'
import { motion, AnimatePresence } from "framer-motion";

import {
  StarIcon,
  BookmarkIcon,
  ShoppingCartIcon,
  ArrowPathIcon,
  FunnelIcon,
  BookOpenIcon,
} from "@heroicons/react/24/solid";

const GridView = ({ book, onClick, handleAddToCart, handleBuyBook }) => {

  return (
    <>
    <div className="relative h-[340px] overflow-hidden cursor-pointer" onClick={onClick} >
                    <img
                      src={
                        book.images[0].url.startsWith("http")
                          ? book.images[0].url
                          : `http://localhost:5000/${book.images[0].url}`
                      }
                      alt={book.title}
                    className="aspect-square w-auto h-full rounded-md my-1 object-contain group-hover:opacity-75 lg:h-80"
                    />
                    <div className="absolute top-2 left-2 bg-white/90 text-red-900 px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                      <StarIcon className="w-3 h-3 mr-1" />
                      {book.rating}
                    </div>
                    {book.availability === "Low Stock" && (
                      <div className="absolute top-2 right-2 bg-yellow-800 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Low Stock
                      </div>
                    )}
                    {book.availability === "Out of Stock" && (
                      <div className="absolute top-2 right-2 bg-red-800 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Out of Stock
                      </div>
                    )}
                  </div>

                  <div className="p-2 flex flex-col flex-grow bg-gray-50"
                //   style={{
                //   background: "#F3F0ED",
                // }}
                  >
                    <h3 className="font-semibold text-lg text-gray-900 mb-1 line-clamp-2">
                      {book.title}
                    </h3>
                    <p className="text-sm text-gray-800 mb-2">{book.author}</p>

                    <div className="mt-auto">
                      <div className="flex justify-between items-center mb-3">
                        {book.rentalPrice ? (
                          <div className="flex items-center"></div>
                        ) : null}

                        <div className="text-right">
                          <span className="font-bold text-gray-900">
                            {book.price}
                          </span>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <motion.button
                          onClick={() => handleBuyBook(book)}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          disabled={book.availability === "Out of Stock"}
                          className={`flex-1 py-2 rounded-lg text-sm font-medium flex items-center justify-center ${
                            book.availability === "Out of Stock"
                              ? "bg-gray-200 text-gray-800 cursor-not-allowed"
                              : "bg-red-800 text-white hover:bg-red-900"
                          }`}
                        >
                          <ShoppingCartIcon className="w-4 h-4 mr-1" />
                          {book.forRent ? "Rent" : "Buy"}
                        </motion.button>

                        <motion.button
                        onClick={() => handleAddToCart(book)}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className="p-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200"
                        >
                          {/* <BookmarkIcon className="w-4 h-4" /> */}
                          <ShoppingCartIcon className="w-4 h-4 mr-1"  />
                        </motion.button>
                      </div>
                    </div>
                  </div>
    </>
  )
}

export default GridView;
