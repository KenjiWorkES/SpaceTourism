import { HeaderItem } from "../../atoms";

const HeaderNav = () => {
  return (
    <nav className="header__nav" id="nav">
      <ul className="header__list">
        <HeaderItem />
        <HeaderItem />
        <HeaderItem />
        <HeaderItem />
      </ul>
    </nav>
  );
};

export default HeaderNav;
