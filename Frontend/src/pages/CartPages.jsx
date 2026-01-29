// import React from "react";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import Navbar from "../components/Navbar/navbar";

// const CartPages = () => {
//   const cartItems = useSelector((state) => state.cart.cartItems);
    // console.log(cartItems);
//   return (
//     <>
//       <div>
//         <Navbar />
//       </div>
//       <div
//         className="max-w-7xl ml-32 flex mt-20 h-full flex-col overflow-hidden bg-white shadow-xl"
//         style={{
//           background: "#F3F0ED",
//         }}
//       >
//         <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
//           <div className="flex items-start justify-between">
//             <div className="text-lg font-medium text-gray-900">
//               Shopping cart{" "}
//             </div>
//             <div className="ml-3 flex h-7 items-center">
//               <button
//                 type="button"
//                 // onClick={handleClearCart}
//                 className="relative -m-2 py-1 px-2 bg-red-500 text-white rounded-md hover:bg-blue-950 transition all duration-200"
//               >
//                 <span className="">Clear Cart</span>
//               </button>
//             </div>
//           </div>

//           <div className="mt-8">
//             <div className="flow-root p-5">
//             {cartItems.length > 0 ? (
//                 <ul role="list" className="-my-6 divide-y divide-gray-200">
//                   {cartItems.map((product) => (
//                     <li key={product._id} className="flex py-6 px-5 shadow-lg rounded-lg">
//                       {/* Image */}
//                       <div className="h-28 w-24 flex-shrink-0 rounded-md border-2 border-gray-200">
//                         <img
//                           src={product.image || "/assets/books/book1.png"} // fallback image
//                           alt={product.title}
//                           className="h-full w-full object-cover object-center"
//                         />
//                       </div>

//                       <div className="ml-4 h-28 flex flex-1 flex-col justify-between">
//                         <div>
//                           <div className="flex flex-wrap justify-between text-base font-medium text-gray-900">
//                             <h3>{product.title}</h3>
//                             <p className="sm-ml-4">${product.price}</p>
//                           </div>

//                           <div className="flex justify-between">
//                             <p className="text-gray-500">
//                               <strong>Qty:</strong> {product.quantity}
//                             </p>
//                             <button
//                               type="button"
//                               onClick={() => handleRemoveItem(product._id)}
//                               className="font-medium text-indigo-600 hover:text-indigo-500"
//                             >
//                               Remove
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p>No Products Found!</p>
//               )}

//               <ul role="list" className="-my-6 divide-y divide-gray-200">
//                 <li className="flex py-6 px-5 shadow-lg rounded-lg">
//                   {/* image div */}
//                   <div className="h-28 w-24 flex-shrink-0 rounded-md border-2 border-gray-200">
//                     <img
//                       src="../assets/books/book1.png"
//                       alt=""
//                       className="h-full w-full object-cover object-center"
//                     />
//                   </div>

//                   <div className="ml-4 h-28 flex flex-1 flex-col justify-between">
//                     <div>
//                       <div
//                         className="flex flex-wrap justify-between text-base font-medium
//                                 text-gray-900"
//                       >
//                         <h3>
//                           <Link to="/">Product Titles</Link>
//                         </h3>
//                         <p className="sm-ml-4">$50</p>
//                       </div>

//                       <div className="flex justify-between">
//                         <p className="text-gray-500">
//                           <strong>Qty:</strong> 1
//                         </p>

//                         <button
//                           type="button"
//                           className="font-medium text-indigo-600 hover:text-indigo-500"
//                         >
//                           Remove
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
//           <div className="flex justify-between text-base font medium text-gray-900">
//             <p>Subtotal</p>
//             <p>$0</p>
//           </div>
//           <p className="mt-0.5 text-sm text-gray-500">
//             Shipping and taxes calculted at checkout.
//           </p>
//           <div className="mt-6">
//             <Link
//               to="/checkout"
//               className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-900 "
//             >
//               Checkout
//             </Link>
//           </div>
//           <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
//             <Link to="/">
//               or
//               <button
//                 type="button"
//                 className="font-medium text-indigo-600 hover:text-indigo-500 ml-1"
//               >
//                 Continue Shopping
//                 <span aria-hidden="true"> &arr;</span>
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CartPages;


import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/Navbar/navbar";
import { removeFromCart, clearCart } from "../redux/features/cart/cartSlice"; // Adjust path as needed

const CartPages = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
      console.log(cartItems);


  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div
        className="max-w-7xl ml-32 flex mt-20 h-full flex-col overflow-hidden bg-white shadow-xl"
        style={{ background: "#F3F0ED" }}
      >
        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
          <div className="flex items-start justify-between">
            <div className="text-lg font-medium text-gray-900">Shopping cart</div>
            <div className="ml-3 flex h-7 items-center">
              <button
                type="button"
                onClick={handleClearCart}
                className="relative -m-2 py-1 px-2 bg-red-500 text-white rounded-md hover:bg-blue-950 transition-all duration-200"
              >
                <span>Clear Cart</span>
              </button>
            </div>
          </div>

          <div className="mt-8">
            <div className="flow-root p-5">
              {cartItems.length > 0 ? (
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {cartItems.map((product) => (
                    <li key={product._id} className="flex py-6 px-5 shadow-lg rounded-lg">
                      {/* Image */}
                      <div className="h-30 w-20 flex-shrink-0 rounded-md border-2 border-gray-200">
                        <img
                         src={
                            product.images?.[0]?.url
                             ? product.images[0].url
                              : "/assets/books/book1.png"
                          } // fallback image
                          alt={product.title}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 h-28 flex flex-1 flex-col justify-between">
                        <div>
                          <div className="flex flex-wrap justify-between text-base font-medium text-gray-900">
                            <h3>
                                <Link to={`/showbooks/${product._id}`}>{product.title} </Link></h3>
                            <p className="sm-ml-4">${product.price}</p>
                          </div>

                          <div className="flex justify-between">
                            <p className="text-gray-500">
                              <strong>Qty:</strong> {product.quantity}
                            </p>
                            <button
                              type="button"
                              onClick={() => handleRemoveItem(product._id)}
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No Products Found!</p>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6 p-5">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>${subtotal.toFixed(2)} </p>
            {/* {subtotal.toFixed(2)} */}
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6">
            <Link
              to="/checkout"
              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-900"
            >
              Checkout
            </Link>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <Link to="/">
              or
              <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500 ml-1"
              >
                Continue Shopping <span aria-hidden="true"> &rarr;</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPages;
