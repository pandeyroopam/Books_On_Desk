import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <a className="title" href="/">
        BooksOnDesk
      </a>

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
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
