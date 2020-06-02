import React, { useEffect, useState } from "react";
import "./header.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const onScroll = () => {
    const scrolledFromTop =
      window.pageYOffset || document.documentElement.scrollTop;

    if (scrolledFromTop > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.onscroll = onScroll;
  }, []);

  const headerClasses = scrolled ? `header header-scrolled` : `header`;

  return (
    <header className={headerClasses}>
      <div className="header-content">
        <a href="https://avtoperevoz.by/" className="title">
          <h1 className="cargo">Грузоперевозки</h1>
          <div>&#8249;АВТОГИНАФ СТРОЙ&#8250;</div>
        </a>
        <a className="tel" href="tel:+375296212612">
          +375 (29) 621-26-12
        </a>
      </div>
    </header>
  );
}

export default Header;
