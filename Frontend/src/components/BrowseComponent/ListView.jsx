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

const ListView = ({ book, onClick, handleAddToCart, handleBuyBook }) => {

  return (
     <div className="flex flex-col md:flex-row" onClick={onClick} >
                    <div className="md:w-1/4 h-42 md:h-auto m-0 p-0">
                      <img
                        src={
                        book.images[0].url.startsWith("http")
                          ? book.images[0].url
                          : `http://localhost:5000/${book.images[0].url}`
                      }
                        alt={book.title}
                        className="aspect-square w-auto h-full rounded-md my-1 object-contain group-hover:opacity-75 lg:h-80"
                      />
                    </div>

                    <div className="p-4 md:w-3/4 flex flex-col"
                    >
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-semibold text-xl text-gray-900 mb-1">
                            {book.title}
                          </h3>
                          <p className="text-gray-900 mb-2">{book.author}</p>
                          <div className="flex items-center mb-3">
                            <span className="bg-red-100 text-red-900 px-2 py-1 rounded-full text-xs font-semibold flex items-center mr-2">
                              <StarIcon className="w-3 h-3 mr-1" />
                              {book.rating}
                            </span>
                            <span className="text-sm text-gray-800">
                              {book.genre}
                            </span>
                          </div>
                        </div>

                        <div className="text-right">
                          {book.rentalPrice && (
                            <div className="mb-2">
                              <span className="text-sm text-gray-800">
                                Rent for
                              </span>
                            </div>
                          )}
                          <p className="text-2xl font-bold text-gray-900">
                            {book.price}
                          </p>
                          {book.availability !== "In Stock" && (
                            <p
                              className={`text-xs mt-1 ${
                                book.availability === "Low Stock"
                                  ? "text-yellow-900"
                                  : "text-red-900"
                              }`}
                            >
                              {book.availability}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="mt-auto flex space-x-2">
                        <motion.button
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          disabled={book.availability === "Out of Stock"}
                          className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center ${
                            book.availability === "Out of Stock"
                              ? "bg-gray-200 text-gray-800 cursor-not-allowed"
                              : "bg-red-800 text-white hover:bg-red-900"
                          }`}
                        >
                          <ShoppingCartIcon className="w-4 h-4 mr-1" />
                          {book.rentalPrice ? "Rent Now" : "Buy Now"}
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium flex items-center hover:bg-gray-50"
                        >
                          {/* <BookmarkIcon className="w-4 h-4 mr-1" /> */}
                          <ShoppingCartIcon className="w-4 h-4 mr-1" />
                          Save
                        </motion.button>
                      </div>
                    </div>
                  </div>
  )
}

export default ListView
