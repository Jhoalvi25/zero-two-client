import logo from "../../img/vecteezy_mask-kitsune-illustration-with-fire-black-and-white_6633452.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedal,
  faFaceAngry,
  faSkull,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import style from "../../style/User/HeaderUser.module.css";
import { useAppSelector } from "../../redux/hooks";


export default function Headeruser() {
  const user = useAppSelector(state => state.user);


    return(
        <div className={style["header"]}>
        <div className={style["blur"]}>
          <div className={style["target"]}>
            <div className={style["logo"]}>
              <img src={logo} alt="img" />
            </div>
            <div className={style["info"]}>
              <div className={style["user-info"]}>
                <h1>{user.nickname}</h1>
              </div>
            </div>
              <div className={style["user-logo"]}>
                <FontAwesomeIcon icon={faUser} />
              </div>
          </div>
        </div>
      </div>
    )
}
