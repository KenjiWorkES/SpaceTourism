import React, { useState } from "react";

import { HeaderNav } from "../../molecules";

const Header = () => {
  const [active, setActive] = useState(false);

  const burguerClasses =
    "header__line " + (active ? "header__line--active" : "");

  const toggleSidebar = () => {
    setActive(!active);
  };

  return (
    <header className="header">
      <img src="/assets/shared/logo.svg" alt="" className="header__logo" />
      <hr className="header__divider" />
      <HeaderNav isActive={active} onToggle={toggleSidebar} />
      <button onClick={toggleSidebar} className="header__burguer">
        <span className={burguerClasses}></span>
      </button>
    </header>
  );
};

export default Header;
