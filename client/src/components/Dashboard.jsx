import React from "react";
import AnimeCards from "./AnimeCards";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import { getAnimes } from "../redux/Animes/actions/index";
import { useDispatch, useSelector } from "react-redux";
import css from '../style/CardAnime.module.css'
import Paginated from './Paginated'
export const Dashboard = () => {
  const dispatch = useDispatch();
  const animes = useSelector((state) => state.animes);
  const anime = useSelector((state) => state.anime);
  console.log("animes", animes);
  const [currentPage, setCurrentpage] = useState(1)
  const [pagine, setPagine] = useState(8)
  const  indexOfLast  = currentPage * pagine
  const indexFirst = indexOfLast - pagine
  const currentAnimes = animes?.slice(indexFirst, indexOfLast)

  useEffect(() => {
    dispatch(getAnimes());
  }, []);

  function handleClick(e) {
    e.preventDefault();
    // dispatch({ type: SEARCH_ANIMES, payload: [] });
    dispatch(getAnimes());
  }
  const currentPagineChange = (numberPagine)=>{
    setCurrentpage(numberPagine)
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
          <div className={css.cards}>
            {currentAnimes?.map((a) => {
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
      <Paginated pagine={pagine} animes={animes} currentPagineChange={currentPagineChange} />
    </div>
  );
};
export default Dashboard;
