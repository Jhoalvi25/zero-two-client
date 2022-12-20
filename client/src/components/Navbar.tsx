import React from "react";
import style from "../style/NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../img/zero.png";

export default function NavBar() {
  return (
    <div className={style.nav}>
      <div>
        <nav className={style.elements}>
          {" "}
          <div className={style.elem}>
            <Link to={"/"}>
              {" "}
              <img src={logo} alt="img" className={style.logo} />
            </Link>

            <span className={style.explore}>Explorar</span>
            <FontAwesomeIcon icon={faCaretDown} className={style.down} />
          </div>
          <div className={style.routes}>
            <Link to={"/suscription"} className={style.sus}>
              {" "}
              <button className={style.premium}>
                <div>
                  <p>Get premium</p>
                  <p className={style.freeTrial}>15 days free!</p>
                </div>
                <span className={style.vip}>VIP</span>
              </button>
            </Link>
            <Link to={"/animes"} className={style.user}>
              <button className={style.log}>
                <FontAwesomeIcon icon={faUser} className={style.iconUser} />
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className={style.iconDown}
                />
              </button>
            </Link>
          </div>
        </nav>

        {/* <div>
          <span className={style.linea}></span>
        </div> */}
      </div>
    </div>
  );
}
