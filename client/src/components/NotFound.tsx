import React from "react";
import style from "../style/NotFound.module.css";
import zeroTwo from "../img/pensando.gif"
import notFoundImg from '../img/missing3.jpg';
interface NotFound {
  msg: string
}

export default function NotFound({msg}:NotFound){
  return (
    <div className={style['not-found']}>
        <h1>{msg || 'Not found, something went wrong...'}</h1>
      <img src={notFoundImg} alt="img not found"  className={style['not-found-img']}></img>
    </div>
  );
};
