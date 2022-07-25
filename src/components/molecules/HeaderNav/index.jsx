import { HeaderItem } from "../../atoms";

const HeaderNav = ({ isActive }) => {
  const sideBarClasses =
    "header__nav " + (isActive ? "header__nav--active" : "");

  return (
    <nav className={sideBarClasses}>
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
