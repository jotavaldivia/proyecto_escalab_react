import s from "./Navbar.module.css";
import Logo from "../logo/Logo";
import Search from "../search/Search";
const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <Logo />
      <Search />
    </nav>
  );
};

export default Navbar;
