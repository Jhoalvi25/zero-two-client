import React from "react";
import style from "../style/CardBasic.module.css";
import Tag from "./Tag";
import { motion } from "framer-motion";


export default function CardBasic({  name, img, showType, status }) {


  return (
    
      <div
        className={style["cardBasic"]}
        
      >
        
        <motion.div className={style["carBasic-img-container"]}>

          <img src={img} alt={``} className={style["anime-img"]} />

        </motion.div>

        
        <motion.div className={style["cardBasic-about"]}>

          <span className={style["title"]}>{name || "Name"}</span>
          <div className={style['tags-container']}>
            <Tag title={showType}bgColor="#1A0750" color="#CB8442" />
            <Tag title={status} bgColor="#CB8442" />
          </div>
          
        </motion.div>
        
      </div>
    
    
  );
}
