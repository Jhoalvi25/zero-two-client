import React from "react";
import { Link } from "react-router-dom";
import style from "../style/LandingPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Carusel from "./Carusel";
import CardInformative from "./CardInformative";
import CardBasic from "./CardBasic";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

export default function LandingPage() {
  const allAnimes = useSelector((state) => state.allAnimes);
  const newestAnimes = useSelector((state) => state.animeNewest);
  return (
    <div>
      <div></div>
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
        <div className={style.test1}>
          {newestAnimes &&
            newestAnimes.map((elem) => {
              return (
                <CardInformative
                  name={elem.name}
                  img={elem.posterImage}
                  id={elem.id}
                  key={elem.id}
                  description={elem.synopsis}
                  showType={elem.showType}
                  status={elem.status}
                  date={elem.startDate}
                />
              );
            })}
        </div>

        <div className={style["test2"]}>
          <Link to={"/animes"}>
            <span>
              <FontAwesomeIcon icon={faChevronDown} className={style.down} />
            </span>
          </Link>
        </div>
      </section>
      <h2 style={{ padding: "2em", color: "#1A0750" }}>
        You can watch it for free...
      </h2>

      <motion.section className={style.section_free}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -512 }}
          className={style.cardsContainer}
        >
          {allAnimes &&
            allAnimes.map((anime, i) => {
              return (
                <CardBasic
                  name={anime.name}
                  img={anime.posterImage}
                  key={anime + "s" + i}
                  showType={anime.showType}
                  status={anime.status}
                />
              );
            })}
        </motion.div>
      </motion.section>
    </div>
  );
}
