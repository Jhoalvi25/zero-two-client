import React from "react";
import { Link } from "react-router-dom";
import style from "../style/LandingPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import NavBar from "./Navbar";
import Carusel from "./Carusel";
import sectionCard from "../sections/section1";
import CardInformative from "./CardInformative";
import CardBasic from "./CardBasic";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { getAnimes, getAnimeGenres } from "../redux/Animes/actions/index";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function LandingPage() {
  const dispatch = useDispatch();
  // const animes = useSelector((state) => state.animes);

  useEffect(() => {
    dispatch(getAnimes());
    dispatch(getAnimeGenres());
  }, [dispatch]);

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
        {animes &&
          animes.map((elem) => {
            return (
              <CardInformative
                name={elem.name}
                img={elem.posterImage}
                id={elem.id}
                key={elem.id}
                description={elem.synopsis}
                showType={elem.showType}
                status={elem.status}
              />
            );
          })}
        <Link to={"/animes"}>
          <span>
            <FontAwesomeIcon icon={faChevronDown} className={style.down} />
          </span>
        </Link>
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
          {animes &&
            animes.map((anime, i) => {
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
      <Footer></Footer>
    </div>
  );
}
