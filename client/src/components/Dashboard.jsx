import React from "react";
import AnimeCards from "./AnimeCards";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import { getAnimes } from "../redux/Animes/actions/index";
import { useDispatch, useSelector } from "react-redux";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const animes = useSelector((state) => state.animes);
  const anime = useSelector((state) => state.anime);
  console.log("animes", anime);

  useEffect(() => {
    dispatch(getAnimes());
  }, []);

  function handleClick(e) {
    e.preventDefault();
    // dispatch({ type: SEARCH_ANIMES, payload: [] });
    dispatch(getAnimes());
  }

  return (
    <div>
      <button className="all-button" onClick={(e) => handleClick(e)}>
        Zero Two
      </button>
      <SearchBar />
      <div className="recipe">
        {anime.length > 0 ? (
          anime.map((a) => {
            return (
              <div className="card-container">
                <AnimeCards
                  image={a.attributes.posterImage.small}
                  name={a.attributes.slug}
                  type={a.type}
                  rating={a.attributes.averageRating}
                />
              </div>
            );
          })
        ) : (
          <div className="card-container">
            {animes?.map((a) => {
              return (
                <div className="container-card">
                  <AnimeCards
                    image={a.attributes.posterImage.small}
                    name={a.attributes.slug}
                    type={a.type}
                    rating={a.attributes.averageRating}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
export default Dashboard;
