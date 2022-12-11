import React from "react";

import zero from "../img/zero11.jpg";
import style from "../style/Animecard.module.css";
export default function AnimeCards(props) {
  return (
    <div className={style["cardBasic"]}>
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
          <strong>{props.name}</strong>
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
    </div>
  );
}
