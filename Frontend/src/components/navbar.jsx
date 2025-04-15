import React from "react";
import "./navbar.css";
<<<<<<< HEAD
import {NavLink} from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar shadow-md">
      <NavLink to="/" className="title">
        BooksOnDesk
      </NavLink>
=======
const Navbar = () => {
  return (
    <nav className="navbar">
      <a className="title" href="/">
        BooksOnDesk
      </a>
>>>>>>> 3291ee9bea01882694e61e1d6f4adf95c474c143

      <form action="" className="search-box">
        <input
          type="text"
          name="search"
          placeholder="Search here"
          className="search-input"
          required
        />

        <button type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      <div>
        <ul className="menuItems">
          <li>
<<<<<<< HEAD
            <NavLink className="content" to="/Browse">
              Browse
            </NavLink>
          </li>
          <li>
            <a className="content" href="#about">
              About
            </a>
          </li>
          <li>
            <NavLink className="content" to="/AddBook">
              AddBooks
            </NavLink>
          </li>
          <li>
            <NavLink className="content" to="/Community">
              Community
            </NavLink>
          </li>
          <li>
            <NavLink className="login log-sig" to="/Login">
              Log In
            </NavLink>
          </li>
          <li>
            <NavLink to="/Signup" className="signup log-sig">
              Sign Up
            </NavLink>
=======
            <a className="content" href="#browse">Browse</a>
          </li>
          {/* <li>
            <a className="content" href="#about">About</a>
          </li> */}
          <li>
            <a className="content" href="#addbooks">AddBooks</a>
          </li>
          <li>
            <a className="content" href="#commmunity">Community</a>
          </li>
          <li>
            <a className="login log-sig" href="#login">Log In</a>
          </li>
          <li>
            <a className="signup log-sig" href="signup">Sign Up</a>
>>>>>>> 3291ee9bea01882694e61e1d6f4adf95c474c143
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
