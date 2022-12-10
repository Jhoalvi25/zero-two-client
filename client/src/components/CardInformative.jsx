import React from "react";
import style from '../style/CardInformative.module.css';

export default function CardInformative ({name, img}) {
    return (
        <div className={style['cardInformative']}>
            <div className={style['cardInformative-first']}>
                <div className={style['cardInformative-image-container']}>
                    <img src={img} alt="anime about alt" className={style['anime-img']} />
                </div>
                <div className={style['about']}>
                    <h4>{name}</h4>
                </div>
            </div>
            <div className={style['cardInformative-second']}>
                <h4>Description</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, numquam.</p>
                <span>Date: 10/12/2022</span>
                <div className={style['tag']}>
                    Ova
                </div>
            </div>
        </div>
    )
}