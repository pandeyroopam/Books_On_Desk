// import React from "react";
// import "./navbar.css";
// import {NavLink} from "react-router-dom";
// const Navbar = () => {
//   return (
//     <nav className="navbar shadow-md">
//       <NavLink to="/" className="title">
//         BooksOnDesk
//       </NavLink>

//       <form action="" className="search-box">
//         <input
//           type="text"
//           name="search"
//           placeholder="Search here"
//           className="search-input"
//           required
//         />

//         <button type="submit">
//           <i className="fa-solid fa-magnifying-glass"></i>
//         </button>
//       </form>
//       <div>
//         <ul className="menuItems">
//           <li>
//             <NavLink className="content" to="/Browse">
//               Browse
//             </NavLink>
//           </li>
//           <li>
//             <a className="content" href="#about">
//               About
//             </a>
//           </li>
//           <li>
//             <NavLink className="content" to="/AddBook">
//               AddBooks
//             </NavLink>
//           </li>
//           <li>
//             <NavLink className="content" to="/Community">
//               Community
//             </NavLink>
//           </li>
//           <li>
//             <NavLink className="login log-sig" to="/Login">
//               Log In
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/Signup" className="signup log-sig">
//               Sign Up
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const checkLogin = () => {
      const token = localStorage.getItem("token");
      setIsLogin(!!token);
    };
    setEmail(localStorage.getItem("userEmail"));
    setUserName(localStorage.getItem("userName"))
    checkLogin();

    window.addEventListener("storage", checkLogin);
    return () => window.removeEventListener("storage", checkLogin);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLogin(false);
    setDropdownOpen(false);
    window.location.href = "/";
  };

  return (
    <header className="sticky top-0 z-50 shadow-md">
      <nav className="bg-[#ffffffcc] backdrop-blur-md">
        <div className="w-full flex flex-wrap items-center justify-between p-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-semibold text-gray-800">
            Book On Desk
          </Link>

          {/* Hamburger Button */}
          <button
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Search (Hidden on mobile) */}
          <div className="hidden md:block relative w-72 border-0">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 ps-10 text-sm border border-gray-200 rounded-md bg-gray-50 focus:ring-1 focus:ring-teal-500 outline-none"
            />
            <div className="absolute left-3 top-2.5 text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
              </svg>
            </div>
          </div>

          {/* Nav links and Auth */}
          <div className={`w-full md:flex md:items-center md:w-auto ${menuOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0">
              <li>
                <Link to="/browse" className="block py-2 text-gray-800 hover:text-teal-700">
                  Browse
                </Link>
              </li>
              <li>
                <Link to="/#About" className="block py-2 text-gray-800 hover:text-teal-700">
                  About
                </Link>
              </li>
              <li>
                <Link to="/#Community" className="block py-2 text-gray-800 hover:text-teal-700">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/AddBook" className="block py-2 text-gray-800 hover:text-teal-700">
                  Add Book
                </Link>
              </li>
            </ul>

            <div className="mt-4 md:mt-0 md:ml-6">
              {!isLogin ? (
                <Link to="/login">
                  <button className="bg-teal-700 hover:bg-emerald-900 text-white px-4 py-1.5 rounded-md w-full md:w-auto">
                    Login
                  </button>
                </Link>
              ) : (
                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center space-x-2 text-sm"
                  >
                    <img
                      className="w-8 h-8 rounded-full"
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                        userName
                      )}&background=0b7e75&color=fff&format=svg`}
                      alt="Profile"
                    />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                      <div className="px-4 py-3 text-sm">
                        <p className="text-gray-900">{userName}</p>
                        <p className="text-gray-500">{email}</p>
                      </div>
                      <ul className="text-sm text-gray-700">
                        <li>
                          <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">
                            Profile
                          </Link>
                        </li>
                        <li>
                          <Link to="/settings" className="block px-4 py-2 hover:bg-gray-100">
                            Settings
                          </Link>
                        </li>
                        <li>
                          <button
                            onClick={handleLogout}
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                          >
                            Sign out
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
