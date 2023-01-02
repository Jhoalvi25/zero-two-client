import React, { useEffect, useState } from "react";
import AnimeCards from "./AnimeCards";
import SearchBar from "../SearchBar";
import Pagination from "../Paginated";
import style from "../../style/AnimesPage/AnimeList.module.css";
import Filters from "../Filters";
import { useLocation } from "react-router-dom";
import { getAllAnimes, getAnimes} from "../../redux/actions";
import Sorts from "../Sorts";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Loading from "../Loading";
import NotFound from "../NotFound";
import { Anime } from "../../types/types";
import { isError } from "../../types/typeGuards";

export interface FilterParams {
  genres: string
}

interface err {
  message: string
}
export const AnimeList = () => {

  const allAnimes = useAppSelector((state) => state['allAnimes']);
  const animes = useAppSelector((state) => state['animes']);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  let {search} = useLocation();
  let searchParams = new URLSearchParams(search);
  let allAnimeQuery: string | URLSearchParams = new URLSearchParams(search);
  allAnimeQuery.delete('page');
  allAnimeQuery = allAnimeQuery.toString();
  allAnimeQuery = decodeURIComponent(allAnimeQuery)

  let page = searchParams.get('page') || 1;
  let name = searchParams.get('name') || '';
  let genres = searchParams.get('genres');
  let sort = searchParams.get('sort') || '';
  let filters:FilterParams = {
    genres: genres || ''
  }
  let totalPages = isError(allAnimes) ? 0 : Math.ceil(allAnimes.length / 15);

  useEffect(() => {
    setLoading(true);
    window.scrollTo({top: 0, behavior: "smooth"});
    dispatch(getAllAnimes(typeof allAnimeQuery === 'string' ? allAnimeQuery: ''))
    dispatch(getAnimes(search)).finally(()=> {
      setLoading(false)
    })
 
  },[dispatch, search, allAnimeQuery]);
  // console.log('search', search)
  return (
  
    <div className={style["container"]} >

      <div className={style['search-sorts-filters-container']}>

        <div className={style["filter-sort-options"]}>
          <Filters search ={search} filterParams={filters}/>
          <Sorts query={search} sort={sort}/>
        </div>

        <SearchBar searchName={name}/>
      </div>
      
      {loading ? <Loading />: isError(animes) ? <NotFound msg={animes.error.message} /> :
      
      <div className={style["card-container"]}>
      {animes?.map((a: Anime, i: number) => {
        return (
          <div className={style["recipe-card"]} key={i}>
            <div className={style["container-card"]}>
              <AnimeCards
                posterImage={a?.posterImage}
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
      }
      

        <Pagination totalPages={totalPages} search={search} page={page} />
    </div>
  );
};
export default AnimeList;
