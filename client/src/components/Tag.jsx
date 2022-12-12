import React from "react";
import style from '../style/Tag.module.css';

export default function Tag ({title, color, bgColor, rounded, padding}) {

    title = title?.toLowerCase();
    return (
        <div className={style['tag']} 
        style={{backgroundColor:`${bgColor}`, color:`${color}`, 
        borderRadius: `${rounded ? '.5em': '0em'}`, padding:`${padding || ".25em"}`}}>
            
            <span className={style['tag-title']}>
            <p className={style.pp}>{title}</p>
            </span>
        </div>
    )
}