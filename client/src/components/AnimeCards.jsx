import React from "react";
import { Link } from "react-router-dom";

import zero from "../img/zero11.jpg";
import style from "../style/Animecard.module.css";
export default function AnimeCards(props) {
  return (
    
      <div className={style["cardBasic"]}>
        <Link to={`/animes/${props.id}`}>
        <div>
          {props.image ? (
            <img className={style["image"]} src={`${props.image}`} alt="img" />
          ) : (
            <img src={zero} alt="img"></img>
          )}
        </div>
        <br />
        <div>
          <div className={style["text-name"]}>
            <div>{props.name}</div>
          </div>
          <div className={style["tr"]}>
            <div className={style["type-text"]}>
              <strong>{props.type}</strong>
            </div>
            <div className={style["rating-text"]}>
              <strong>{props.rating}</strong>
            </div>
          </div>
        </div>
        </Link>
      </div>
    
    
  );
}
