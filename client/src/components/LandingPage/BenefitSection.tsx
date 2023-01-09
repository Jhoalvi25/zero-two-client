import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../../style/LandingPage/BenefitSection.module.css";
import {
  faClock,
  faExclamation,
  faCrown,
  faBagShopping
} from "@fortawesome/free-solid-svg-icons";

export default function BenefitSection(): JSX.Element {
  return (
    <div className={style["benefit"]}>
      <p>
        {" "}
        <FontAwesomeIcon icon={faClock} className={style["icon"]} /> <br />
        Watch new episodes one hour <br /> after they air in Japan
      </p>
      <p>
        <FontAwesomeIcon icon={faExclamation} className={style["icon"]} /> <br />
        Enjoy access to unlimited <br /> ad-free anime
      </p>
      <p>
        <FontAwesomeIcon icon={faCrown} className={style["icon"]} /> <br />
        Read hundreds of chapters <br /> across dozens of manga titles*
      </p>
      <p>
      <FontAwesomeIcon icon={faBagShopping} className={style["icon"]} /> <br />
      Save with exclusive <br /> ZeroTwo Store discounts*
      </p>
    </div>
  );
}
