import React from "react";
import AnimeCards from "./AnimeCards";
import SearchBar from "./SearchBar";
import Pagination from "./Paginated";
import NavBar from "./Navbar";
import style from "../style/Home.module.css";

import { useEffect, useState } from "react";
import { getAnimes } from "../redux/Animes/actions/index";
import { useDispatch, useSelector } from "react-redux";
import Filters from "./Filters.jsx";
import { motion } from "framer-motion";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const animes = useSelector((state) => state.animes);
  const anime = useSelector((state) => state.anime);
  console.log("animes", anime);
  const isActive = useSelector((state) => state.isActive);
  console.log(animes)
  const [orden, setOrden] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  //estado local
  const [cardPerPage] = useState(12);

  const indexOfLastCard = currentPage * cardPerPage;
  const indexOfFirstCard = indexOfLastCard - cardPerPage;

  var currentData = animes.slice(indexOfFirstCard, indexOfLastCard);

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={style["container"]}>
      <motion.div drag="x"
          dragConstraints={{ right: 0, left: -3580 }} className={style["Nav"]}>
        <Filters setCurrentPage ={setCurrentPage} />
      </motion.div>
      <SearchBar />
      <div className={style["containerc"]}>
        {anime.length > 0 ? (
          anime.map((a, i) => {
            return (
              <div className={style["card-container"]} key={i}>
                <div className={style["recipe-card"]}>
                  <div className={style["container-card"]}>
                    <AnimeCards
                      image={a?.posterImage}
                      name={a?.name}
                      type={a?.showType}
                      rating={a?.averageRating}
                    />
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className={style["card-container"]}>
            {currentData?.map((a, i) => {
              return (
                <div className={style["recipe-card"]} key={i}>
                  <div className={style["container-card"]}>
                    <AnimeCards
                      image={a.posterImage}
                      name={a?.name}
                      type={a?.showType}
                      rating={a?.averageRating}
                      id={a.id}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      {isActive
        ? anime.length > 11 && (
            <Pagination
              cardPerPage={cardPerPage}
              totalCards={animes.length}
              pagination={pagination}
            />
          )
        : currentData && (
            <Pagination
              cardPerPage={cardPerPage}
              totalCards={animes.length}
              pagination={pagination}
              currentPage={currentPage}
            />
          )}
    </div>
  );
};
export default Dashboard;
