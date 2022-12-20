import React from "react";
import { Link } from "react-router-dom";
import style from '../style/CardInformative.module.css';
import Tag from "./Tag";
import formatDate from "../utils/formatDate";

export default function CardInformative ({name, img, id, description, showType, status, date}) {
    date = new Date(date)
    return (
        <div className={style['cardInformative']} key={name + id}> 
            <div className={style['cardInformative-first']}>
                <div className={style['cardInformative-image-container']}>
                    <img src={img} alt="anime about alt" className={style['anime-img']} />
                </div>
                <div className={style['about']}>
                    <Link to={"/animes/" + id}>
                        <h4>{name}</h4>
                    </Link>
                </div>
            </div>
            <div className={style['cardInformative-second']}>
                <h4>Description</h4>
                 <div className={style.description}>
                    <p>{description}</p>
                    <Link to={`/animes/${id}`} className={style['read-more']}>read more</Link>
                </div>
                
                <span className={style.date}>{formatDate(date)}</span>
                {/* <div className={style['tag']}>
                    {showType || 'OVA'}
                </div> */}
                <div className={style['tags']}>
                <Tag title={showType} bgColor={'#CB8442'} rounded={true}/>
                <Tag title={status} color={"#CB8442"} bgColor={"#120B39"} rounded={true}/>
                </div>
            </div>
        </div>
    )
}