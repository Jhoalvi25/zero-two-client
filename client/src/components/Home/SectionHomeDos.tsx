import React from "react";
import { useSelector } from "react-redux";

import style from "../../style/Home/SectionHomeDos.module.css";

import CardBasic from "../CardBasic";

import { motion } from "framer-motion";

export default function SectionHomeDos() {
  interface RootState {
    animes: {
      map(arg0: (anime: { name: string; posterImage: string; showType: string; status: string; }, i: string) => JSX.Element): React.ReactNode;
      name: string;
      posterImage: string;
      showType: string;
      status: string;
    };
  }

  const animes = useSelector((state: RootState) => state.animes);

  return (
    <>
      <h2 style={{ padding: "2em", color: "#1A0750" }}>
          You can watch it for free...
      </h2>
      <motion.section className={style['section_dos']}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -650 }}
          className={style['cardsContainer']}
        >
          {animes &&
            animes.map((anime: { name: string; posterImage: string; showType: string; status: string; }, i: string) => {
              return (
                <CardBasic
                  name={anime.name}
                  img={anime.posterImage}
                  key={anime.name + " - " + i}
                  showType={anime.showType}
                  status={anime.status}
                />
              );
            })}
        </motion.div>
      </motion.section>
    </>
  );
}
