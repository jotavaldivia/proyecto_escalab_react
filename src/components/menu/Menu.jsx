import { useState } from "react";
import s from "./Menu.module.css";
import PropTypes from "prop-types";
export const Menu = ({ menu, hanlderMenuSelected }) => {
  const [selected, setSelected] = useState(0);
  //console.log(selected);
  return (
    <ul className={s.ul}>
      {menu.map((m) => {
        return (
          <li
            className={selected === m.id ? s.li__active : s.li}
            key={m.id}
            onClick={() => {
              hanlderMenuSelected(m);
              setSelected(m.id);
            }}
          >
            {m.name}
          </li>
        );
      })}
    </ul>
  );
};

Menu.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  hanlderMenuSelected: PropTypes.func.isRequired,
};
