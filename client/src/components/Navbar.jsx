import React from "react";
import style from "../style/NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../img/zero.png";

export default function NavBar() {
  return (
    <div className={style.nav}>
      <div>
        <nav className={style.elements}>
          {" "}
          <div className={style.elem}>
            <img src={logo} alt="img" className={style.logo} />
            <span className={style.explore}>Explorar</span>
            <FontAwesomeIcon icon={faCaretDown} className={style.down} />
          </div>
          <div className={style.routes}>
            <Link to={"/suscription"} className={style.sus}>Get premium</Link>
            <Link to={"/login"} className={style.user}><FontAwesomeIcon icon={faUser} /></Link>
          </div>
        </nav>
        <div></div>
      </div>
      <span className={style.linea}></span>
    </div>
  );
}
