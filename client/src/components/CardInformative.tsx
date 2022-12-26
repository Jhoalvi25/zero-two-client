import React, { PropsWithRef } from "react";
import { Link } from "react-router-dom";
import style from '../style/CardInformative.module.css';
import Tag from "./Tag";
import formatDate from "../utils/formatDate";
import { Anime } from "../types/types";

  
interface ChildCardInformative{
    name: string
    img: string
    id: string
    description: string
    showType: string
    status: string
    date: string | Date
}

const CardInformative = ({name, posterImage, id, synopsis, showType, status, startDate}: PropsWithRef<Anime>) => {

    return (
        <div className={style['cardInformative']} key={name + id}> 
            <div className={style['cardInformative-first']}>
                <div className={style['cardInformative-image-container']}>
                    <img src={posterImage} alt="anime about alt" className={style['anime-img']} />
                </div>
                <div className={style['about']}>
                    <Link to={"/animes/" + id}>
                        <h4>{name}</h4>
                    </Link>
                </div>
            </div>
            <div className={style['cardInformative-second']}>
                <h4>Description</h4>
                <div className={style['description']}>
                    <p>{synopsis}</p>
                    <Link to={`/animes/${id}`} className={style['read-more']}>read more</Link>
                </div>
                <span className={style['date']}>{formatDate(startDate)}</span>
                <div className={style['tags']}>
                    <Tag title={showType} bgColor={'#A77DDD'} rounded={true} color={'#5519B6'}/>
                    <Tag title={status} color={"white"} bgColor={"#5519B6"} rounded={true}/>
                </div>
            </div>
        </div>
    )
};

export default CardInformative;