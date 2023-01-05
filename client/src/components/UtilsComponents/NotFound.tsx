import React from "react";
import style from "../../style/UtilsComponents/NotFound.module.css";
// import zeroTwo from "../img/pensando.gif"
// import notFoundImg from '../../img/missing3.jpg';
import todorokiImg from '../../img/todoroki-Img.png'
import { Link } from "react-router-dom";
interface NotFoundInterface {
  msg?: string
}

export default function NotFound({msg}:NotFoundInterface){
  return (
    <div className={style['not-found']}>
      <div className={style['not-found-content']}>
        <h1>404 <br />{msg || 'Oooopss...nothing to show here'}</h1>
        <button type="button" className={style['callback-btn']}>
          <Link to='/home'>
            Go back home
          </Link>
        </button>
      </div>
      <div className={style['not-found-image']}>
        <img src={todorokiImg} alt="img not found"  className={style['not-found-img']}></img>
      </div>
    </div>
  );
};
