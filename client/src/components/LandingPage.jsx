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
        <h2 className={style.section1}>New Animes</h2>
      </div>
      <section className={style.section_cont}>
        {sectionCard &&
          sectionCard.map((elem) => {
            return (
              <div className={style.card}>
                <Link to={"/home/" + elem.id}>
                  <div className={style.left}>
                    <img
                      src={elem.image}
                      alt="img"
                      width="300px"
                      height="170px"
                    />
                    <h3>{elem.name}</h3>
                  </div>
                  <div className={style.rigth}>
                    <span>Description:</span>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <span>Date: 09/12/2002</span>
                  </div>
                </Link>
              </div>
            );
          })}
        <Link to={"/animes"}>
          <span>
            <FontAwesomeIcon icon={faChevronDown} className={style.down} />
          </span>
        </Link>
      </section>
      <section className={style.free}>
        <h1>You can watch it for free...</h1>
        <div className={style.freeCont}>
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
        </div>
      </section>
    </div>
  );
}
