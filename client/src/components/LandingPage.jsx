import React from "react";
import { Link } from "react-router-dom";
import style from "../style/LandingPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import NavBar from "./Navbar";
import Carusel from "./Carusel";
import sectionCard from "../sections/section1";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import caruselImg from "../Carusel-logyc/caruselImg";
import CardInformative from "./CardInformative";
import CardBasic from "./CardBasic";

export default function LandingPage() {
  return (
    <div>
      <div>
        <NavBar></NavBar>
      </div>
      <section className={style.header}>
        <h1>
          What´s being <span>watched</span> now?
        </h1>
        <Carusel></Carusel>
      </section>
      <div>
        <span className={style.space}></span>
      </div>
      <div>
        <h2 className={style.section1}>New Episodes - Winter - Week 2</h2>
      </div>
      <section className={style.section_cont}>
        {sectionCard && sectionCard.map((elem) => {
            return (
              <CardInformative name={elem.name} img={elem.image} id={elem.id} key={elem.id}/>
            );
          })}
        <Link to={"/animes"}>
          <span>
            <FontAwesomeIcon icon={faChevronDown} className={style.down} />
          </span>
        </Link>
      </section>
      <h2 style={{padding: '2em', color:'#1A0750'}}>You can watch it for free...</h2>
      {/*<section className={style.free}>*/ }
      <section className={style.section_free}>
        
        {/* <div className={style.freeCont}>
          <div className={style.cardDos}>
            <button className={style.btn}>
              {" "}
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <div className={style.img}>
              <img
                src={caruselImg[0].image}
                width="300px"
                height="170px"
                alt="img"
              />
              <h2>{caruselImg[0].name}</h2>
            </div>
            <div className={style.img}>
              <img
                src={caruselImg[1].image}
                width="300px"
                height="170px"
                alt="img"
              />
              <h2>{caruselImg[1].name}</h2>
            </div>
            <div className={style.img}>
              <img
                src={caruselImg[2].image}
                width="300px"
                height="170px"
                alt="img"
              />
              <h2>{caruselImg[2].name}</h2>
            </div>

            <button className={style.btn}>
              {" "}
              <FontAwesomeIcon icon={faChevronRight} />{" "}
            </button>
          </div>
        </div> */}
        <button className={style.btn}>
              {" "}
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
        <div className={style.cardsContainer}>
          {sectionCard && sectionCard.map((anime, i) => {
            return (
            i < 3 ? <CardBasic name={anime.name} img={anime.image} key={anime +'s' + i} />: ''
            )
            
          })}
        </div>
        <button className={style.btn}>
              {" "}
              <FontAwesomeIcon icon={faChevronRight} />{" "}
            </button>
        
      </section>
    </div>
  );
}
