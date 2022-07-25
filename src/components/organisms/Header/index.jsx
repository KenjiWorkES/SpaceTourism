import { HeaderNav } from "../../molecules";

const Header = () => {
  return (
    <header className="header">
      <img src="/assets/shared/logo.svg" alt="" className="header__logo" />
      <HeaderNav />
      <button className="header__burguer">burguer</button>
    </header>
  );
};

export default Header;
