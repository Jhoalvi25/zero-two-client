import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import style from "../../style/NavBar/DropdownUser.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faUser, faMedal  } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const DropdownUser = () => {

  const [menu, setMenu] = useState(false);
  //login
  //Pasar User loging, logout a un nuevo componente
  const {logout, loginWithRedirect, isAuthenticated} = useAuth0();
  
  const handleLogin = async () => {
    await loginWithRedirect({
      prompt: "login",
      appState: {
        returnTo: "/home",
      },
    });
  };

  const handleLogout = ()=> logout({ returnTo: window.location.origin });

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className={style["explore user"]}>
      <button onClick={toggleMenu} className={style["log"]}>
        <p className={style["type"]}>User</p>
        <FontAwesomeIcon icon={faMedal} className={style["medal"]} />
        <FontAwesomeIcon
          icon={faCaretDown}
          className={style["iconDown"]}
        />
        <FontAwesomeIcon icon={faUser} className={style["iconUser"]} />
      </button>
      <nav
        className={
          style["nav-dropdown"] +
          " " +
          style[`${menu ? "isActive" : ""}`]
        }>
        <ul className={style["ul-dropdown"]}>
          <li className={style["li-dropdown"]}>
            <Link to={'/profile'} className={style['li-dropdown']}>
                My Account
            </Link>
          </li>
          {!isAuthenticated ? 
            <>
              <li onClick={handleLogin} className={style["li-dropdown"]}>
                Login
              </li>
            </> : 
            <>
            <li onClick={handleLogout} className={style["li-dropdown"]}>
                Logout
            </li>
            </> 
          }
        </ul>
      </nav>
    </div>
  )
};

export default DropdownUser;