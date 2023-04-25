import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbarCont">
      <nav className="navbar">
        <ul className="list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link>The Brand</Link>
          </li>
          <li>
            <Link>Shop</Link>
          </li>
          <li>
            <Link>Blog</Link>
          </li><li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Sign in</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
