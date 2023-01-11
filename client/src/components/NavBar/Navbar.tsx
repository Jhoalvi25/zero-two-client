import style from "../../style/NavBar/NavBar.module.css";
import { Link } from "react-router-dom";
import logo from "../../img/zeroSticker.png";
import DropdownExplore from "./Dropdown-explore";
import DropdownUser from "./Dropdown-user";

const NavBar = () => {

  return (
    <div className={style["nav"]}>
      <div>
        <nav className={style["elements"]}>
          <div className={style["elem"]}>
            <Link to={"/"}>
              <img src={logo} alt="img" className={style["logo"]} />
            </Link>
            <DropdownExplore />
          </div>
          <div className={style["routes"]}>
            <Link to={"/suscription"} className={style["sus"]}>
              <button className={style["premium"]}>
                <div>
                  <p>Get premium</p>
                  <p className={style["freeTrial"]}>15 days free!</p>
                </div>
                <span className={style["vip"]}>VIP</span>
              </button>
            </Link>
            <DropdownUser />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
