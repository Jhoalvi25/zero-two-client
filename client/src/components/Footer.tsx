import React from "react";

import style from '../style/Footer.module.css';
import logo from "../img/zeroSticker.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import {faFire} from "@fortawesome/free-solid-svg-icons"
import{faEye} from "@fortawesome/free-solid-svg-icons"
import{faMasksTheater} from "@fortawesome/free-solid-svg-icons"
import {faUserPen} from "@fortawesome/free-solid-svg-icons"
import {faKey } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
    return (
        <footer className={style['footer']}>
            <div className={style['footer-brand']}>
                <img src={logo} alt='zero-two brand logo' className={style['brand-logo']}/>
            </div>
            <div className={style['footer-info']}>
                <div className={style['explore']}>
                    <h4 className={style['title']}>Explore</h4>
                    <div className={style['options']}>
                        <div className={style['option']}>
                            <FontAwesomeIcon icon={faFire} className={style['icon']}/>
                            <span className={style['span-links']}>Most popular</span>
                        </div>
                        <div className={style['option']}>
                            <FontAwesomeIcon icon={faEye} className={style['icon']}/>
                            <span className={style['span-links']}>Playing now</span>
                        </div>
                        <div className={style['option']}>
                            <FontAwesomeIcon icon={faMasksTheater} className={style['icon']}/>
                            <span className={style['span-links']}>Genres</span>
                        </div>
                    </div>
                </div>
                <div className={style['account']}>
                    <h4 className={style['title']}>Account</h4>
                    <div className={style['options']}>
                        <div className={style['option']}>
                            <FontAwesomeIcon icon={faUserPen} className={style['icon']} />
                            <span className={style['span-links']}>Create account</span>
                        </div>
                        <div className={style['option']}>
                            <FontAwesomeIcon icon={faKey} className={style['icon']} />
                            <span className={style['span-links']}>Sign in</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style['footer-contact']}>
                <span className={style["made-by"]}>Made by</span>
                <div className={style['footer-profile']}>
                    <a className={style['a-href']} href="https://github.com/juandavid015">
                        <div className={style['user']}>
                            <span className={style['user-name']}>juandavid015</span>
                            <FontAwesomeIcon icon={faGithub} />
                        </div>
                        <span className={style['tag']}>Tag role</span>
                    </a>   
                </div>
                <div className={style['footer-profile']}>
                    <a className={style['a-href']} href="https://github.com/nicosanchezprev">
                        <div className={style['user']}>
                            <span className={style['user-name']}>nicosanchezprev</span>
                            <FontAwesomeIcon icon={faGithub} />
                        </div>
                        <span className={style['tag']}>Tag role</span>
                    </a> 
                </div>
                <div className={style['footer-profile']}>
                    <a className={style['a-href']} href="https://github.com/jhoalvi25">
                        <div className={style['user']}>
                            <span className={style['user-name']}>jhoalvi25</span>
                            <FontAwesomeIcon icon={faGithub} />
                        </div>
                        <span className={style['tag']}>Tag role</span>
                    </a>
                </div>
                <div className={style['footer-profile']}>
                    <a className={style['a-href']} href="https://github.com/Mariapaula56">
                        <div className={style['user']}>
                            <span className={style['user-name']}>Mariapaula56</span>
                            <FontAwesomeIcon icon={faGithub} />
                        </div>
                        <span className={style['tag']}>Tag role</span>
                    </a> 
                </div>
                <div className={style['footer-profile']}>
                    <a className={style['a-href']} href="https://github.com/billyandrys">
                        <div className={style['user']}>
                            <span className={style['user-name']}>billyandrys</span>
                            <FontAwesomeIcon icon={faGithub} />
                        </div>
                        <span className={style['tag']}>Tag role</span>
                    </a>
                </div>
            </div>
        </footer>
    )
};

export default Footer;