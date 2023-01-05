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
            <FontAwesomeIcon icon={faFire} className={style['icon']}/>
            <span>
              <Link onClick={toggleMenu} className={style["a-dropdown"]} to="/animes/trending">
                Most popular
              </Link>
            </span>
          </li>
          <li className={style["li-dropdown"]}>
            <FontAwesomeIcon icon={faEye} className={style['icon']}/>
            <span>
              <Link onClick={toggleMenu} className={style["a-dropdown"]} to="/animes/newest">
                Playing now 
              </Link>
            </span>
          </li>
          <li className={style["li-dropdown"]}>
            <FontAwesomeIcon icon={faMasksTheater} className={style['icon']}/>
            <span>
              <Link onClick={toggleMenu} className={style["a-dropdown"]} to="/animes">
                Genres
              </Link>
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DropdownExplore;
