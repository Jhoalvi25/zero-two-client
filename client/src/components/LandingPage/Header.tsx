import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import style from "../../style/LandingPage/Header.module.css"
import { Link } from "react-router-dom";

export default function Header(): JSX.Element {
  return (
    <div className={style["presentacion"]}>
        <h1>Enjoy Watching you favorites <br /> animes in the way <br /> you wish!</h1>
        
        <button className={style["premium"]}><a href={"#dispositive-section"} className={style['btn-link']}>Become premium now!</a></button>
        
        
        <button className={style["explore"]}><Link to={"/home"} className={style['btn-link']}>Explore</Link></button>
        
      
        <h2>Enjoy your animes</h2>

        <a href={"#dispositive-section"} className={style['link-down']}>
          <FontAwesomeIcon icon={faAnglesDown} className={style["angle"]}></FontAwesomeIcon>
        </a>
      
    </div>
  ) ;
}
