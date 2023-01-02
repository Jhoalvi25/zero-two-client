import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import style from "../../style/Home/SectionHomeUno.module.css";

import CardInformative from "./CardInformative";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useAppSelector } from "../../redux/hooks";

interface AppState {
  childNewest: Array<ChildNewest>;
}

interface ChildNewest {
  name: string;
  posterImage: string;
  id: string;
  synopsis: string;
  showType: string;
  status: string;
  startDate: string;
}

const SectionHomeUno = () => {
  const newestAnimes = useAppSelector((state) => state["animeNewest"]);
  return (
    <>
      <div>
        <h2 className={style["section1_container"]}>
          New Episodes - Winter - Week 2
        </h2>
      </div>
      <section className={style["section_container"]}>
        <div className={style["section_newAnimes"]}>
          {newestAnimes &&
            newestAnimes.map((elem) => {
              return (
                <CardInformative
                  name={elem.name}
                  posterImage={elem.posterImage}
                  id={elem.id}
                  key={elem.id}
                  synopsis={elem?.synopsis?.substring(0, 60) + "..."}
                  showType={elem.showType}
                  status={elem.status}
                  startDate={elem.startDate}
                />
              );
            })}
        </div>

        <div className={style["section_link"]}>
          <Link to={"/animes"}>
            <span>
              <FontAwesomeIcon icon={faChevronDown} className={style["down"]} />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default SectionHomeUno;
