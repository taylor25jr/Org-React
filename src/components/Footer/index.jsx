import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: "url(/img/Footer.svg)" }}
    >
      <div className="redes">
        <a href="https://www.facebook.com/itsluistaylorjr/">
          <img src="/img/facebook.svg" alt="facebook" />
        </a>
        <a href="https://twitter.com/luistaylorjr">
          <img src="/img/twitter.svg" alt="twitter" />
        </a>
        <a href="https://www.instagram.com/luistaylorjr/">
          <img src="/img/instagram.svg" alt="instagram" />
        </a>
      </div>
      <img src="/img/Logo.svg" alt="" />
      <strong>Desarrollado por Luis Ferrer</strong>
    </footer>
  );
};
