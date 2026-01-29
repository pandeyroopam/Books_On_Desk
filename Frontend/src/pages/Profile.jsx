// import { useState, useEffect } from "react";
// import UserProfile from "../components/ProfileComponent/userprofile/UserProfile";
// import UserAddress from "../components/ProfileComponent/useraddress/UserAddress";
// //import UserOrder from "../components/ProfileComponent/userorder/UserOrder";

// export default function Profile() {
//   const [userName, setUserName] = useState("");
//   const [email, setEmail] = useState("");
//   const [activeSection, setActiveSection] = useState("profile");

//   useEffect(() => {
//     setUserName(localStorage.getItem("userName"));
//     setEmail(localStorage.getItem("userEmail"));
//   }, []);

//   const handleSectionClick = (section) => {
//     setActiveSection(section);
//   };

//   return (
//     <>
//       <div className="min-h-full w-[100%] bg-white">
//         <button
//           data-drawer-target="default-sidebar"
//           data-drawer-toggle="default-sidebar"
//           aria-controls="default-sidebar"
//           type="button"
//           className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//         >
//           <span className="sr-only">Open sidebar hi where i'm written i'm trying to find out but i'm unable</span>
//           <svg
//             className="w-6 h-6"
//             aria-hidden="true"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               clip-rule="evenodd"
//               fill-rule="evenodd"
//               d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
//             ></path>
//           </svg>
//         </button>

//         <aside
//           id="default-sidebar"
//           className="ml-2.5 fixed top-0 left-0 z-40 w-[21%] h-screen transition-transform -translate-x-full sm:translate-x-0"
//           aria-label="Sidebar"
//         >
//           <div className="h-full border border-t-0 border-gray-300 shadow-md overflow-y-auto bg-gray-50 dark:bg-gray-800">
//             <div className="ml-[-2px] absolute w-[102%] bg-white h-25 p-4 py-6 rounded-xl border border-gray-300 shadow-md flex gap-8 items-center font-bold text-2xl mb-8 mt-0">
//               <img
//                 className="w-12 h-12 rounded-full"
//                 src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
//                   userName
//                 )}&background=920229&color=fff&format=svg`}
//                 alt="Profile"
//               />
//               {userName}
//             </div>
//             <div className="px-3">
//               <ul className="mt-26 space-y-2 font-medium">
//                 <li>
//                   <button
//                     onClick={() => handleSectionClick("profile")}
//                     className="w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
//                   >
//                     <span className="ms-3">My Profile</span>
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     onClick={() => handleSectionClick("address")}
//                     className="w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
//                   >
//                     <span className="ms-3">Delivery Address</span>
//                     <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
//                       Pro
//                     </span>
//                   </button>
//                 </li>
//                 <div className="border-b-2 border-gray-200"></div>
//                 <li>
//                   <button
//                     onClick={() => handleSectionClick("orders")}
//                     className="w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
//                   >
//                     <span className="ms-3">My Order</span>
//                     <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
//                       3
//                     </span>
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     onClick={() => handleSectionClick("topOrder")}
//                     className="w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
//                   >
//                     <span className="ms-3">Top Order Product</span>
//                   </button>
//                 </li>
//                 <div className="border-b-2 border-gray-200"></div>
//                 <li>
//                   <button
//                     onClick={() => handleSectionClick("wishlist")}
//                     className="w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
//                   >
//                     <span className="ms-3">My Wishlist</span>
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     onClick={() => handleSectionClick("recentlyViewed")}
//                     className="w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
//                   >
//                     <span className="ms-3">Recently Viewed</span>
//                   </button>
//                 </li>
//                 <div className="border-b-2 border-gray-200"></div>
//                 <li>
//                   <button
//                     onClick={() => handleSectionClick("credit")}
//                     className="w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
//                   >
//                     <span className="ms-3">My Credit</span>
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     onClick={() => handleSectionClick("referFriend")}
//                     className="w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
//                   >
//                     <span className="ms-3">Refer Friend</span>
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </aside>

//         <div className="Display p-4 sm:ml-[calc(100vw-75%)]">
//           {/* Conditional Rendering Based on Active Section */}
//           {activeSection === "profile" && (
//             <>
//               <div className=" w-ful flex flex-col items-center ">
//                 <div className="h-[20%] w-[80%] border border-gray-400 item center shadow-md ">
  
//                   <img
//                     className="h-[150px] w-[150px] mx-auto border border-gray-500 rounded-full mb-4"
//                     src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
//                       userName
//                     )}&background=920229&color=fff&format=svg`}
//                     alt="Profile"
//                   />
//                   <div className="text-center border border-gray-500 mx-auto  text-4xl">
//                     {" "}
//                     {userName}
//                   </div>
//                 </div>
//                 <div className="">
//                   <UserProfile />
//                 </div>
//               </div>
//             </>
//           )}

//           {activeSection === "address" && (
//             <div className="">
//               <UserAddress />
//             </div>
//           )}

//           {activeSection === "orders" && (
//             <div>
//               <h3 className="text-2xl font-semibold">My Orders</h3>
//               <UserOrder />
//             </div>
//           )}

//           {activeSection === "topOrder" && (
//             <div>
//               <h3 className="text-2xl font-semibold">Top Order Products</h3>
//               <p>See the top order products here.</p>
//             </div>
//           )}

//           {activeSection === "wishlist" && (
//             <div>
//               <h3 className="text-2xl font-semibold">My Wishlist</h3>
//               <p>View your saved products here.</p>
//             </div>
//           )}

//           {activeSection === "recentlyViewed" && (
//             <div>
//               <h3 className="text-2xl font-semibold">Recently Viewed</h3>
//               <p>View your recently viewed items here.</p>
//             </div>
//           )}

//           {activeSection === "credit" && (
//             <div>
//               <h3 className="text-2xl font-semibold">My Credit</h3>
//               <p>View and manage your credits here.</p>
//             </div>
//           )}

//           {activeSection === "referFriend" && (
//             <div>
//               <h3 className="text-2xl font-semibold">Refer Friend</h3>
//               <p>Refer a friend and earn rewards.</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }


import { useState, useEffect } from "react";
import UserProfile from "../components/ProfileComponent/userprofile/UserProfile";
import UserAddress from "../components/ProfileComponent/useraddress/UserAddress";
import ReferAndEarn from "../components/ProfileComponent/userrefer/UserEarn";
import Credit from "../components/ProfileComponent/usercredit/UserCredit";
import RecentlyViewedBooks from "../components/ProfileComponent/RecentViewed/Recent";
import WishlistPage from "../components/ProfileComponent/wishlist/Wishlist";
import MyOrdersPage from "../components/ProfileComponent/userorder/UserOrder";
import UserUploadedBooks from "../components/ProfileComponent/UserUploadedBooks/UserUploadedBook";
import TopOrderPage from "../components/ProfileComponent/topOrders/TopOrder";
import { Link } from "react-router-dom";

import {
  ArrowLeftCircleIcon,
  UserCircleIcon,
  MapPinIcon,
  ShoppingBagIcon,
  FireIcon,
  HeartIcon,
  EyeIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

import image1 from "../assets/log6.jpg";

export default function Profile() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [activeSection, setActiveSection] = useState("profile");

  useEffect(() => {
    setUserName(localStorage.getItem("userName"));
    setEmail(localStorage.getItem("userEmail"));
  }, []);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <div className="min-h-full w-[100%] bg-red-50">
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>

        <aside
          id="default-sidebar"
          className="fixed top-0 left-0 z-40 w-[20%] h-screen transition-transform -translate-x-full sm:translate-x-0 bg-[#920229] shadow-md"
          aria-label="Sidebar"
        >
          <div className="px-4 py-3 flex items-center gap-2">
            <Link to="/" className="">
              <ArrowLeftCircleIcon className="w-10 h-10 text-white" />
            </Link>
            <span className="text-xl font-bold text-white">Book On Desk</span>
          </div>

          <div
            className="flex items-center gap-4 px-4 py-8 text-white font-semibold bg-cover"
            style={{ backgroundImage: `url(${image1})` }}
          >
            <img
              className="w-15 h-15 rounded-full ml-2"
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                userName
              )}&background=fff&color=920229&format=svg`}
              alt="Profile"
            />
            <div className="text-lg">{userName}</div>
          </div>

          <div className="h-full overflow-y-auto px-4 py-6 text-white font-semibold">
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => handleSectionClick("profile")}
                  className={`flex items-center gap-2 w-full text-left px-4 py-2 rounded-lg ${
                    activeSection === "profile"
                      ? "bg-white text-[#920229] font-bold"
                      : "hover:bg-white hover:text-[#920229]"
                  }`}
                >
                  <UserCircleIcon className="w-5 h-5" />
                  My Profile
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick("address")}
                  className={`flex items-center gap-2 w-full text-left px-4 py-2 rounded-lg ${
                    activeSection === "address"
                      ? "bg-white text-[#920229] font-bold"
                      : "hover:bg-white hover:text-[#920229]"
                  }`}
                >
                  <MapPinIcon className="w-5 h-5" />
                  Delivery Address
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick("orders")}
                  className={`flex items-center gap-2 w-full text-left px-4 py-2 rounded-lg ${
                    activeSection === "orders"
                      ? "bg-white text-[#920229] font-bold"
                      : "hover:bg-white hover:text-[#920229]"
                  }`}
                >
                  <ShoppingBagIcon className="w-5 h-5" />
                  My Orders
                </button>
              </li>
              {/* <li>
                <button
                  onClick={() => handleSectionClick("UserUploadedBooks")}
                  className={`flex items-center gap-2 w-full text-left px-4 py-2 rounded-lg ${
                    activeSection === "UserUploadedBooks"
                      ? "bg-white text-[#920229] font-bold"
                      : "hover:bg-white hover:text-[#920229]"
                  }`}
                >
                  <FireIcon className="w-5 h-5" />
                  My Uploaded Books
                </button>
              </li> */}
              <li>
                <button
                  onClick={() => handleSectionClick("topOrder")}
                  className={`flex items-center gap-2 w-full text-left px-4 py-2 rounded-lg ${
                    activeSection === "topOrder"
                      ? "bg-white text-[#920229] font-bold"
                      : "hover:bg-white hover:text-[#920229]"
                  }`}
                >
                  <FireIcon className="w-5 h-5" />
                  Top Order Product
                </button>
              </li>
              {/* <li>
                <button
                  onClick={() => handleSectionClick("wishlist")}
                  className={`flex items-center gap-2 w-full text-left px-4 py-2 rounded-lg ${
                    activeSection === "wishlist"
                      ? "bg-white text-[#920229] font-bold"
                      : "hover:bg-white hover:text-[#920229]"
                  }`}
                >
                  <HeartIcon className="w-5 h-5" />
                  My Wishlist
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick("recentlyViewed")}
                  className={`flex items-center gap-2 w-full text-left px-4 py-2 rounded-lg ${
                    activeSection === "recentlyViewed"
                      ? "bg-white text-[#920229] font-bold"
                      : "hover:bg-white hover:text-[#920229]"
                  }`}
                >
                  <EyeIcon className="w-5 h-5" />
                  Recently Viewed
                </button>
              </li> */}
              <li>
                <button
                  onClick={() => handleSectionClick("credit")}
                  className={`flex items-center gap-2 w-full text-left px-4 py-2 rounded-lg ${
                    activeSection === "credit"
                      ? "bg-white text-[#920229] font-bold"
                      : "hover:bg-white hover:text-[#920229]"
                  }`}
                >
                  <CurrencyDollarIcon className="w-5 h-5" />
                  My Credits
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick("referFriend")}
                  className={`flex items-center gap-2 w-full text-left px-4 py-2 rounded-lg ${
                    activeSection === "referFriend"
                      ? "bg-white text-[#920229] font-bold"
                      : "hover:bg-white hover:text-[#920229]"
                  }`}
                >
                  <UserGroupIcon className="w-5 h-5" />
                  Refer Friend
                </button>
              </li>
            </ul>
          </div>
        </aside>

        <div className="Display p-4 sm:ml-[calc(100vw-75%)]">
          {/* Conditional Rendering Based on Active Section */}
          {activeSection === "profile" && (
            <>
              <div className=" w-ful flex flex-col items-center ">
                <div className="">
                  <UserProfile />
                </div>
              </div>
            </>
          )}

          {activeSection === "address" && (
            <div className="">
              <UserAddress />
            </div>
          )}

          {activeSection === "orders" && (
            <div>
              <MyOrdersPage />
            </div>
          )}

          {activeSection === "UserUploadedBooks" && (
            <div>
              <UserUploadedBooks />
            </div>
          )}

          {activeSection === "topOrder" && (
            <div>
              <TopOrderPage/>
            </div>
          )}

          {activeSection === "wishlist" && (
            <div>
              <WishlistPage />
            </div>
          )}

          {activeSection === "recentlyViewed" && (
            <div>
              <RecentlyViewedBooks />
            </div>
          )}

          {activeSection === "credit" && (
            <div>
              <Credit />
              {/* <h3 className="text-2xl font-semibold">My Credit</h3>
              <p>View and manage your credits here.</p> */}
            </div>
          )}

          {activeSection === "referFriend" && (
            <div>
              <ReferAndEarn />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
