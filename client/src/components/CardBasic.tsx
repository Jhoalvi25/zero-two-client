import React from "react";
import style from "../style/CardBasic.module.css";
import Tag from "./Tag";
import { motion } from "framer-motion";
import { Anime } from "../types/types";

const CardBasic = ({name, posterImage, showType, status}: Anime ) => {
  return (
    <div className={style["cardBasic"]}>
      <motion.div className={style["carBasic-img-container"]}>
        <img src={posterImage} alt={'anime-card'} className={style["anime-img"]} />
      </motion.div>
      <motion.div className={style["cardBasic-about"]}>
        <span className={style["title"]}>{name || "Name"}</span>
        <div className={style['tags-container']}>
          <Tag title={showType} bgColor="#1A0750" color="#A77DDD" />
          <Tag title={status} bgColor="#A77DDD" />
        </div>
      </motion.div>
    </div>
  );
};

export default CardBasic;