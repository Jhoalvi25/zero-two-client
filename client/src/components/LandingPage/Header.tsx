import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import style from "../../style/LandingPage/Header.module.css"
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className={style["presentacion"]}>
        <h1>Enjoy Watching you favorites <br /> animes in the way <br /> you wish!</h1>
        <Link to={"/subscription"}>
            <button className={style["premium"]}>Become premium now°</button>
        </Link>
        <Link to={"/subscription"}>
            <button className={style["explore"]}>Explore</button>
        </Link>
        <Link to={"/subscription"}>
        <h2>Enjoy personalization</h2>
        <FontAwesomeIcon icon={faAnglesDown} className={style["angle"]}></FontAwesomeIcon>
        </Link>
      
    </div>
  ) ;
}
