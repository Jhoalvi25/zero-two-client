import React from "react";
import style from '../style/Tag.module.css';

export default function Tag ({title, color, bgColor}) {
    return (
        <div className={style['tag']} 
        style={{backgroundColor:`${bgColor}`, color:`${color}`}}>
            <span className={['tag-title']}>
                {title}
            </span>
        </div>
    )
}