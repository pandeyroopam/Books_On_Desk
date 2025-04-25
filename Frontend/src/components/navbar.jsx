import React from "react";
import "./navbar.css";
import {NavLink} from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar shadow-md">
      <NavLink to="/" className="title">
        BooksOnDesk
      </NavLink>

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
            <NavLink className="content" to="/Browse">
              Browse
            </NavLink>
          </li>
          {/* <li>
            <a className="content" href="#about">
              About
            </a>
          </li> */}
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
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
