import React from "react";
import style from '../style/Tag.module.css';

interface DataTag {
    title: string
    color?: string
    bgColor?: string
    rounded?: boolean
    padding?: string
}

const Tag =  ({title, color, bgColor, rounded, padding} : DataTag) => {
    return (
        <div
            className={style['tag']} 
            style={{
                backgroundColor:`${bgColor}`, color:`${color}`, 
                borderRadius: `${rounded ? '.5em': '0em'}`, padding:`${padding || ".25em"}`
            }}>
            <span className={style['tag-title']}>
                <p className={style['pp']}>{title}</p>
            </span>
        </div>
    )
};

export default Tag;