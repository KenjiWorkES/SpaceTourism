import { NavLink } from "react-router-dom";

const HeaderItem = ({ index, text, link }) => {
  return (
    <li className="header__item">
      <NavLink className="header__link" to={index}>
        <label className="header__label">{index}</label>
        <p className="header__text">{text}</p>
      </NavLink>
    </li>
  );
};

export default HeaderItem;
