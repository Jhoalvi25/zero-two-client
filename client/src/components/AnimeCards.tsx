import React from "react";
import { Link } from "react-router-dom";
import Tag from './Tag';
import style from "../style/Animecard.module.css";
import { Anime } from "./Animedetail";

export default function AnimeCards({posterImage, name, id, showType, status}:Anime) {
  return (
    
      <div className={style["cardAnime"]}>
        <div className={style['cardAnime-image-container']}>
          <Link to={`/animes/${id}`}>
            <img src={posterImage} alt={`img ${name}`} className={style['anime-img']} />
          </Link>
        </div>
        <div className={style['cardAnime-content-container']}>
          <h4>{name}</h4>
          <Tag title={showType} bgColor={'#CB8442'} rounded={false} color={'black'} padding={'1em'}/>
          <Tag title={status} color={"#CB8442"} bgColor={"#120B39"} rounded={false} padding={'1em'}/>
        </div>
      </div>
    
    
  );
}
