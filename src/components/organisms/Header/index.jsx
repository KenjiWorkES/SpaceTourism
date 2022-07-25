import { HeaderNav } from "../../molecules";

const Header = () => {
  return (
    <header className="header">
      <img src="/assets/shared/logo.svg" alt="" className="header__logo" />
      <HeaderNav />
      <a href="#nav">
        <button className="header__burguer">
          <span className="header__line"></span>
        </button>
      </a>
    </header>
  );
};

export default Header;
