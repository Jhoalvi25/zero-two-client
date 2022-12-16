import React from "react";
import { Link } from "react-router-dom";
import Tag from './Tag.jsx';
import zero from "../img/zero11.jpg";
import style from "../style/Animecard.module.css";
export default function AnimeCards({image, name, id, showType, status}) {
  return (
    
      <div className={style["cardAnime"]}>
        <div className={style['cardAnime-image-container']}>
          <Link to={`/animes/${id}`}>
            <img src={image} alt={`image of ${name}`} className={style['anime-img']} />
          </Link>
        </div>
        <div className={style['cardAnime-content-container']}>
          <h4>{name}</h4>
          <Tag title={showType} bgColor={'#CB8442'} rounded={false}/>
          <Tag title={status} color={"#CB8442"} bgColor={"#120B39"} rounded={false}/>
        </div>
      </div>
    
    
  );
}
