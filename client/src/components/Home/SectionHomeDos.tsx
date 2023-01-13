import style from "../../style/Home/SectionHomeDos.module.css";
import CardBasic from "./CardBasic";
import { motion } from "framer-motion";
import { useAppSelector } from "../../redux/hooks";

// If i want to set props to this element type this: 
// const SectionHomeDos = ({name_of_the_prop}: Props) => {
const SectionHomeDos = ():JSX.Element => {
  const animes= useAppSelector((state) => state['animes']);

  return (
    <>
      <h2 style={{ padding: "2em", color: "#1A0750" }}>
          You can watch it for free...
      </h2>
      <motion.section className={style['section_dos']}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -1650 }}
          className={style['cardsContainer']}
        >
          {animes &&
            animes.rows.map((anime, i) => {
              return (
                <CardBasic
                  name={anime.name}
                  posterImage={anime.posterImage}
                  key={anime.name + " - " + i}
                  showType={anime.showType}
                  status={anime.status}
                />
              );
            })}
        </motion.div>
      </motion.section>
    </>
  )
};

export default SectionHomeDos;
