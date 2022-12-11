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

export default function Footer () {
    return (
        <footer className={style.footer}>
            <div className={style['footer-brand']}>
                <img src={logo} alt='zero-two brand logo' className={style['brand-logo']}/>
            </div>

            <div className={style['footer-info']}>

                <div className={style['explore']}>
                    <h4 className={style['title']}>Explore</h4>
                    <div className={style['options']}>
                        <div className={style['option']}>
                            <span>Most popular</span>
                            <FontAwesomeIcon icon={faFire} className={style['icon']}/>
                        </div>
                        <div className={style['option']}>
                            <span>Playing now</span>
                            <FontAwesomeIcon icon={faEye} className={style['icon']}/>
                        </div>
                        <div className={style['option']}>
                            <span>Genres</span>
                            <FontAwesomeIcon icon={faMasksTheater} className={style['icon']}/>
                        </div>
                    </div>
                    
                </div>

                <div className={style['account']}>
                    <h4 className={style['title']}>Account</h4>
                    <div className={style['options']}>
                        <div className={style['option']}>
                            <span>Create account</span>
                            <FontAwesomeIcon icon={faUserPen} className={style['icon']} />
                        </div>
                        <div className={style['option']}>
                            <span>Sign in</span>
                            <FontAwesomeIcon icon={faKey} className={style['icon']} />
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={style['footer-contact']}>
                <span className={style["made-by"]}>Made by</span>

                <div className={style['footer-profile']}>
                    <div className={style['user']}>
                        <span className={style['user-name']}>Username</span>
                        <FontAwesomeIcon icon={faGithub} />
                    </div>
                    <span className={style['tag']}>Tag role</span>
                    
                </div>
                <div className={style['footer-profile']}>
                    <div className={style['user']}>
                        <span className={style['user-name']}>Username</span>
                        <FontAwesomeIcon icon={faGithub} />
                       
                    </div>
                    <span className={style['tag']}>Tag role</span>
                    
                </div>
                <div className={style['footer-profile']}>
                    <div className={style['user']}>
                        <span className={style['user-name']}>Username</span>
                        <FontAwesomeIcon icon={faGithub} />
                    </div>
                    <span className={style['tag']}>Tag role</span>
                    
                </div>
                <div className={style['footer-profile']}>
                    <div className={style['user']}>
                        <span className={style['user-name']}>Username</span>
                        <FontAwesomeIcon icon={faGithub} />
                    </div>
                    <span className={style['tag']}>Tag role</span>
                    
                </div>
                <div className={style['footer-profile']}>
                    <div className={style['user']}>
                        <span className={style['user-name']}>Username</span>
                        <FontAwesomeIcon icon={faGithub} />
                    </div>
                    <span className={style['tag']}>Tag role</span>
                    
                </div>
                <div className={style['footer-profile']}>
                    <div className={style['user']}>
                        <span className={style['user-name']}>Username</span>
                        <FontAwesomeIcon icon={faGithub} />
                    </div>
                    <span className={style['tag']}>Tag role</span>
                    
                </div>
                
            </div>
        </footer>
    )
}