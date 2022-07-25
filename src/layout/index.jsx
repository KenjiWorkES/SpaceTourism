import { Header } from "../components/organisms";

const Layout = ({ children }) => {
  <>
    <Header />
    <main>{children}</main>
  </>;
};

export default Layout;
