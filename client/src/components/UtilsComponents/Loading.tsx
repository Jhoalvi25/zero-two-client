import React from "react";
import style from "../../style/UtilsComponents/Loading.module.css"

export default function Loading() {
  return (
    <div className={style['loading']}>
      <div className={style["spinner"]}>
        <span className={style["spinner-part-0"]}></span>
        <span className={style["spinner-part-1"]}></span>
        <span className={style["spinner-part-2"]}></span>
        <span className={style["spinner-part-3"]}></span>
        <span className={style["spinner-part-0"]}></span>
        <span className={style["spinner-part-1"]}></span>
        <span className={style["spinner-part-2"]}></span>
        <span className={style["spinner-part-3"]}></span>
      </div>
    </div>
    
  );
}
