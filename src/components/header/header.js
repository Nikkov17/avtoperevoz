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
          <h2>&#8249;АВТОГИНАФ СТРОЙ&#8250;</h2>
        </a>
        <div className="tels">
          <a className="tel" href="tel:+375296212612">
            +375 (29) 621-26-12
          </a>
          <a className="tel" href="tel:+375296974468">
            +375 (29) 697-44-68
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
