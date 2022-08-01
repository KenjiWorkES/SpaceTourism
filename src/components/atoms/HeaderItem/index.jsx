import { NavLink } from "react-router-dom";

const HeaderItem = ({ index, text, link, onClick }) => {
  return (
    <li className="header__item" onClick={onClick}>
      <NavLink
        className={({ isActive }) =>
          isActive ? "header__link header__link--active" : "header__link"
        }
        to={link}
      >
        <label className="header__label">{index}</label>
        <p className="header__text">{text}</p>
      </NavLink>
    </li>
  );
};

export default HeaderItem;
