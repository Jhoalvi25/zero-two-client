import { useState } from "react";

import style from "../../style/NavBar/Dropdown-explore.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const DropdownExplore = () => {
  const [menu, setMenu] = useState(false);
  
  const toggleMenu = (): void => {
    setMenu(!menu);
  };

  return (
    <div className={style["explore"]}>
              <h4 className={style["h4-dropdown"]}>Explorar</h4>
              <button onClick={toggleMenu} className={style["button-dropdown"]}>
                <FontAwesomeIcon icon={faCaretDown} className={style["down"]} />
              </button>
              <nav
                className={
                  style["nav-dropdown"] +
                  " " +
                  style[`${menu ? "isActive" : ""}`]
                }
              >
                <ul className={style["ul-dropdown"]}>
                  <li className={style["li-dropdown"]}>
                    <a className={style["a-dropdown"]} href="www.google.com.ar">
                      Item 1
                    </a>
                  </li>
                  <li className={style["li-dropdown"]}>
                    <a className={style["a-dropdown"]} href="www.google.com.ar">
                      Item 2
                    </a>
                  </li>
                  <li className={style["li-dropdown"]}>
                    <a className={style["a-dropdown"]} href="www.google.com.ar">
                      Item 3
                    </a>
                  </li>
                  <li className={style["li-dropdown"]}>
                    <a className={style["a-dropdown"]} href="www.google.com.ar">
                      Item 4
                    </a>
                  </li>
                  <li className={style["li-dropdown"]}>
                    <a className={style["a-dropdown"]} href="www.google.com.ar">
                      Item 5
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
  )
};

export default DropdownExplore;