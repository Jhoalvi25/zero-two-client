import React from "react";
import AnimeCards from "./AnimeCards";
import SearchBar from "./SearchBar";
import Pagination from "./Paginated";
import NavBar from "./Navbar";
import style from "../style/Home.module.css";

import { useEffect, useState } from "react";
import { getAnimes } from "../redux/Animes/actions/index";
import { useDispatch, useSelector } from "react-redux";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const animes = useSelector((state) => state.animes);
  const anime = useSelector((state) => state.anime);
  console.log("animes", anime);
  const isActive = useSelector((state) => state.isActive);

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

  useEffect(() => {
    dispatch(getAnimes());
  }, []);

  return (
    <div className={style["container"]}>
      <NavBar />
      <div className={style["Nav"]}>
        <div className={style["search"]}></div>
      </div>
      <SearchBar />
      <div className={style["containerc"]}>
        {anime.length > 0 ? (
          anime.map((a) => {
            return (
              <div className={style["card-container"]}>
                <div className={style["recipe-card"]}>
                  <div className={style["container-card"]}>
                    <AnimeCards
                      image={a.attributes.posterImage.small}
                      name={a.attributes.slug}
                      type={a.type}
                      rating={a.attributes.averageRating}
                    />
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className={style["card-container"]}>
            {currentData?.map((a) => {
              return (
                <div className={style["recipe-card"]}>
                  <div className={style["container-card"]}>
                    <AnimeCards
                      image={a.attributes.posterImage.small}
                      name={a.attributes.slug}
                      type={a.type}
                      rating={a.attributes.averageRating}
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
            />
          )}
    </div>
  );
};
export default Dashboard;
