import logo from "../../img/vecteezy_mask-kitsune-illustration-with-fire-black-and-white_6633452.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedal,
  faFaceAngry,
  faSkull,
} from "@fortawesome/free-solid-svg-icons";

import style from "../../style/User/HeaderUser.module.css";


export default function Headeruser() {
    return(
        <div className={style["header"]}>
        <div className={style["blur"]}>
          <div className={style["target"]}>
            <div className={style["logo"]}>
              <img src={logo} alt="img" />
            </div>
            <div className={style["info"]}>
              <div className={style["user-info"]}>
                <h3>
                  Demon Slayer -<span> Premium</span>
                </h3>
                <h4>Juandgr</h4>
                <br />
                <div className={style["user-icon"]}>
                  <h5>Badges</h5>
                  <div className={style["badges"]}>
                    <FontAwesomeIcon
                      icon={faMedal}
                      className={style["medal"]}
                    />
                    <FontAwesomeIcon
                      icon={faFaceAngry}
                      className={style["medal"]}
                    />
                    <FontAwesomeIcon
                      icon={faSkull}
                      className={style["medal"]}
                    />
                  </div>
                </div>
              </div>
              <div className={style["user-logo"]}>
                <FontAwesomeIcon icon={faSkull} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
