import React, { useState } from "react";
import style from "../style/NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../img/zero.png";

const NavBar = () => {

  const [menu, setMenu] = useState(false);

  const toggleMenu = (): void => {
    setMenu(!menu);
  }

  return (
    <div className={style['nav']}>
      <div>
        <nav className={style['elements']}>
          <div className={style['elem']}>
            <Link to={"/"}>
              <img src={logo} alt="img" className={style['logo']} />
            </Link>
            <div className={style['explore']}>
              <h4 className={style['h4-dropdown']}>Explorar</h4>
              <button 
                onClick={ toggleMenu }
                className={style['button-dropdown']} >
                <FontAwesomeIcon icon={faCaretDown} className={style['down']} />
              </button>
              <nav className={style['nav-dropdown'] + ' ' +  style[`${menu ? 'isActive' : ''}`]}>
                <ul className={style['ul-dropdown']}>
                  <li className={style['li-dropdown']}><a className={style['a-dropdown']} href="www.google.com.ar">Item 1</a></li>
                  <li className={style['li-dropdown']}><a className={style['a-dropdown']} href="www.google.com.ar">Item 2</a></li>
                  <li className={style['li-dropdown']}><a className={style['a-dropdown']} href="www.google.com.ar">Item 3</a></li>
                  <li className={style['li-dropdown']}><a className={style['a-dropdown']} href="www.google.com.ar">Item 4</a></li>
                  <li className={style['li-dropdown']}><a className={style['a-dropdown']} href="www.google.com.ar">Item 5</a></li>
                </ul>
              </nav>
            </div>
          </div>
          <div className={style['routes']}>
            <Link to={"/suscription"} className={style['sus']}>
              <button className={style['premium']}>
                <div>
                  <p>Get premium</p>
                  <p className={style['freeTrial']}>15 days free!</p>
                </div>
                <span className={style['vip']}>VIP</span>
              </button>
            </Link>
            <Link to={"/animes"} className={style['user']}>
              <button className={style['log']}>
                <FontAwesomeIcon icon={faUser} className={style['iconUser']} />
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className={style['iconDown']}
                />
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;  