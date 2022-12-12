import React from "react";
import { Link } from "react-router-dom";
import style from '../style/CardInformative.module.css';
import Tag from "./Tag";

export default function CardInformative ({name, img, id, description, showType, status, date}) {
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
                {description ? <div className={style.description}><p>{description}</p></div>
                :<div className={style.description}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, numquam.</p></div>
                }
                <span>{date}</span>
                {/* <div className={style['tag']}>
                    {showType || 'OVA'}
                </div> */}
                <Tag title={showType} bgColor={'#CB8442'}/>
                <Tag title={status} color={"#CB8442"} bgColor={"#120B39"}/>
            </div>
        </div>
    )
}