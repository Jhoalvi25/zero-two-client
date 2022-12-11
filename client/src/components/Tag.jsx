import React from "react";
import style from '../style/Tag.module.css';

export default function Tag ({title, color, bgColor, rounded, padding}) {
    return (
        <div className={style['tag']} 
        style={{backgroundColor:`${bgColor}`, color:`${color}`, 
        borderRadius: `${rounded ? '.5em': '0em'}`, padding:`${padding || ".25em"}`}}>
            <span className={['tag-title']}>
                {title}
            </span>
        </div>
    )
}