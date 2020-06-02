import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <a href="mailto:avtoperevoz-@mail.ru" className="footer-text email">
        E-mail: avtoperevoz-@mail.ru
      </a>
      <address className="footer-text">
        Республика Беларусь, 220137 г. Минск, ул.Байкальская, 17
      </address>
      <div className="footer-text">© 2014 - 2020 ИП Ковалёв В.М.</div>
    </footer>
  );
}

export default Footer;
