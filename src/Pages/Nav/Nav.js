import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = ({ active, setActive }) => {
  return (
    <nav>
      <Link
        to="/"
        className={active === "home" ? "active" : ""}
        onClick={() => setActive((prev) => (prev = "home"))}
      >
        Home
      </Link>
      <Link
        to="/about"
        className={active === "about" ? "active" : ""}
        onClick={() => setActive((prev) => (prev = "about"))}
      >
        About
      </Link>
      <Link
        to="/profile"
        className={active === "profile" ? "active" : ""}
        onClick={() => setActive((prev) => (prev = "profile"))}
      >
        Profile
      </Link>
    </nav>
  );
};

export default Nav;
