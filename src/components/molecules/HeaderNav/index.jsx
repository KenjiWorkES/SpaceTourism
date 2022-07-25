import { HeaderItem } from "../../atoms";

const HeaderNav = ({ isActive }) => {
  const sideBarClasses =
    "header__nav " + (isActive ? "header__nav--active" : "");

  return (
    <nav className={sideBarClasses}>
      <ul className="header__list">
        <HeaderItem index="01" text="Home" link="/" />
        <HeaderItem index="02" text="Destination" link="/destination" />
        <HeaderItem index="03" text="Crew" link="/crew" />
        <HeaderItem index="04" text="technology" link="/technology" />
      </ul>
    </nav>
  );
};

export default HeaderNav;
