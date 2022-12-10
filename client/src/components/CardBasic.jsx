import React from "react";
import style from '../style/CardBasic.module.css';
import Tag from "./Tag";

export default function CardBasic ({name, img, tags}) {
    return(
        <div className={style['cardBasic']}>
            <div className={style['carBasic-img-container']}>
                <img src={img} alt={``} className={style['anime-img']} />
            </div>
            <div className={style['cardBasic-about']}>
                <span className={style['title']}>{name || 'Name'}</span>
                <Tag title='TV' bgColor='#1A0750' color='#CB8442'/>
                <Tag title='OVA' bgColor='#CB8442'/>
            </div>
        </div>
    )
}