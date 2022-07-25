import { NavLink } from "react-router-dom";

const HeaderItem = () => {
  return (
    <li className="header__item">
      <NavLink className="header__link" to="/">
        <label className="header__label">00</label>
        <p className="header__text">Home</p>
      </NavLink>
    </li>
  );
};

export default HeaderItem;
