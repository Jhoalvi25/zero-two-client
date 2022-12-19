import React, { useEffect } from "react";
import AnimeCards from "./AnimeCards";
import SearchBar from "./SearchBar";
import Pagination from "./Paginated";
import style from "../style/AnimeList.module.css";
import { useDispatch, useSelector } from "react-redux";
import Filters from "./Filters.jsx";
import { useLocation } from "react-router-dom";
import { getAllAnimes, getAnimes} from "../redux/actions";
import Sorts from "./Sorts";

export const AnimeList = () => {

  const allAnimes = useSelector((state) => state.allAnimes);
  const animes = useSelector((state) => state.animes);
  const dispatch = useDispatch();

  let {search} = useLocation();
  let searchParams = new URLSearchParams(search);

//   allAnimeQuery.delete('page');
//   allAnimeQuery = decodeURIComponent(allAnimeQuery);

  let page = searchParams.get('page') || 1;
  let name = searchParams.get('name') || '';
  let genres = searchParams.get('genres');
  let sort = searchParams.get('sort') || '';
  let filters = {
    genres: genres || ''
  }
  let totalPages = Math.ceil(allAnimes.length / 9);

  useEffect(() => {

    window.scrollTo({top: 0, behavior: "smooth"});
    dispatch(getAllAnimes(search))
    dispatch(getAnimes(search))

  },[dispatch, search]);
  console.log('search', search)
  return (
    <div className={style["container"]} >

      <div className={style['search-sorts-filters-container']}>

        <div className={style["filter-sort-options"]}>
          <Filters search ={search} filterParams={filters}/>
          <Sorts query={search} sort={sort}/>
        </div>

        <SearchBar searchName={name}/>
      </div>
   
      <div className={style["card-container"]}>
        {animes?.map((a, i) => {
          return (
            <div className={style["recipe-card"]} key={i}>
              <div className={style["container-card"]}>
                <AnimeCards
                  image={a?.posterImage}
                  name={a?.name}
                  showType={a?.showType}
                  status={a?.status}
                  id={a.id}
                />
              </div>
            </div>
              );
            })}
     
        </div>

        <Pagination totalPages={totalPages} search={search} page={page} />
    </div>
  );
};
export default AnimeList;
