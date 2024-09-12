import React from "react";
import { Link } from "react-router-dom";
import "./componentsCss/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <Link className="link" to="/">
        Accueil
      </Link>
      <Link className="link" to="/classes-and-pricing">
        Horaires & Tarifs
      </Link>
      <Link className="link" to="/studio">
        Le Studio
      </Link>
      <Link className="link" to="/yoga-information">
        L'enseignement
      </Link>
      <Link className="link" to="/contact">
        Contact
      </Link>
    </div>
  );
};

export default Navbar;
