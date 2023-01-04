import { useState } from "react";
import style from "../../style/NavBar/Dropdown-explore.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import {faFire} from "@fortawesome/free-solid-svg-icons"
import{faEye} from "@fortawesome/free-solid-svg-icons"
import{faMasksTheater} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";

const DropdownExplore = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = (): void => {
    setMenu(!menu);
  };

  return (
    <div className={style["explore"]}>
      <button onClick={toggleMenu} className={style["button-dropdown"]}>
        <h4 className={style["h4-dropdown"]}>Explorar</h4>
        <FontAwesomeIcon icon={faCaretDown} className={style["down"]} />
      </button>
      <nav
        className={
          style["nav-dropdown"] + " " + style[`${menu ? "isActive" : ""}`]
        }
      >
        <ul className={style["ul-dropdown"]}>
          <li className={style["li-dropdown"]}>
            <Link className={style["a-dropdown"]} to="/animes/trending">
              <FontAwesomeIcon icon={faFire} className={style['icon']}/>
              <span>Most popular</span>
            </Link>
          </li>
          <li className={style["li-dropdown"]}>
            <Link className={style["a-dropdown"]} to="/animes/newest">
              <FontAwesomeIcon icon={faEye} className={style['icon']}/>
              <span>Playing now</span> 
            </Link>
          </li>
          <li className={style["li-dropdown"]}>
            <Link className={style["a-dropdown"]} to="/animes">
              <FontAwesomeIcon icon={faMasksTheater} className={style['icon']}/>
              <span>Genres</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DropdownExplore;
