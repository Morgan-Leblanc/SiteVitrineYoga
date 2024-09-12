import React from "react";
import "./componentsStyle/Footer.css";
import lotus from "../assets/pictures/lotus.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <p>© 2023 Yoga Arc-en-Ciel. Tous droits réservés. Webmaster Morgan Leblanc.</p>
      <img src={lotus} alt="Lotus" id="lotus" />
    </footer>
  );
};

export default Footer;
