import { HeaderItem } from "../../atoms";

const HeaderNav = ({ isActive, onToggle }) => {
  const sideBarClasses =
    "header__nav " + (isActive ? "header__nav--active" : "");

  return (
    <nav className={sideBarClasses}>
      <ul className="header__list">
        <HeaderItem onClick={onToggle} index="01" text="Home" link="/" />
        <HeaderItem
          onClick={onToggle}
          index="02"
          text="Destination"
          link="/destination"
        />
        <HeaderItem onClick={onToggle} index="03" text="Crew" link="/crew" />
        <HeaderItem
          onClick={onToggle}
          index="04"
          text="technology"
          link="/technology"
        />
      </ul>
    </nav>
  );
};

export default HeaderNav;
