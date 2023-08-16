import s from "./Navbar.module.css";
import Logo from "../logo/Logo";
import Search from "../search/Search";
import PropTypes from "prop-types";
const Navbar = ({ data }) => {
  const { characters, setCharacters, hanlderSearch } = data;
  return (
    <nav className={s.navbar}>
      <Logo />
      <Search data={{ characters, setCharacters, hanlderSearch }} />
    </nav>
  );
};

export default Navbar;

Navbar.propTypes = {
  data: PropTypes.object.isRequired,
};
