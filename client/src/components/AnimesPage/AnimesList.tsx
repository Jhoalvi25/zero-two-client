import { useEffect, useMemo, useState } from "react";
import AnimeCards from "./AnimeCards";
import SearchBar from "../NavBar/SearchBar";
import Pagination from "./Paginated";
import style from "../../style/AnimesPage/AnimeList.module.css";
import Filters from "./Filters";
import { useLocation } from "react-router-dom";
import { getAnimeNewest, getAnimes, getAnimeTrending} from "../../redux/actions";
import Sorts from "./Sorts";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Loading from "../UtilsComponents/Loading";
import NotFound from "../UtilsComponents/NotFound";
import { Anime } from "../../types/types";
import { isError } from "../../types/typeGuards";
import { useParams } from "react-router-dom";

export interface FilterParams {
  genres: string
}

export const AnimeList = () => {

  const {option} = useParams();

 

  const animes = useAppSelector((state) => state['animes']);
  const animeNewest = useAppSelector((state) => state['animeNewest'])
  const animeTrending = useAppSelector((state) => state['animesTrending'])
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const [active, setActive] = useState('all');

  let {search} = useLocation();
  let searchParams = new URLSearchParams(search);

  // let allAnimeQuery: URLSearchParams | string = useMemo(()=> {
  //   return new URLSearchParams(search)
  // },[search]);
  // allAnimeQuery.delete('page');
  // allAnimeQuery = allAnimeQuery.toString()

 
  let page = searchParams.get('page') || 1;
  let name = searchParams.get('name') || '';
  let genres = searchParams.get('genres');
  let sort = searchParams.get('sort') || '';
  let filters:FilterParams = {
    genres: genres || ''
  }
  // let totalPages = isError(allAnimes) ? 0 : Math.ceil(allAnimes.length / 15);
  const animesToDisplay = useMemo(()=> {
    let list = active==='all' ? animes : active==='newest' ? animeNewest: animeTrending;
    return list
  },[animeNewest , animes, animeTrending, active]);
  
  let totalPages = isError(animesToDisplay) ? 0 : animesToDisplay.count / 15;

  useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"});
    
      if(option === 'newest') {
        setLoading(true);
        dispatch(getAnimeNewest(search)).finally(()=> {
          setActive(()=> 'newest')
          setLoading(false)
        })
      } else if (option === 'trending'){
        setLoading(true);
        dispatch(getAnimeTrending(search)).finally(()=> {
          setActive(()=> 'trending')
          setLoading(false)
        })
      }else {
        setLoading(true);
        dispatch(getAnimes(search)).finally(()=> {
          setActive(()=> 'all')
          setLoading(false)
        })
      }
      
   
  },[dispatch, search, option]);
  return (
  
    <div className={style["container"]} >

      <div className={style['search-sorts-filters-container']}>

        <div className={style["filter-sort-options"]}>
          <Filters search ={search} filterParams={filters}/>
          <Sorts query={search} sort={sort}/>
        </div>

        <SearchBar styleWidth={false} searchName={name}/>
      </div>
      
      {loading ? <Loading />: isError(animesToDisplay) ? <NotFound msg={animesToDisplay.error.message} /> :
      
      <div className={style["card-container"]}>
      {animesToDisplay.rows?.map((a: Anime, i: number) => {
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
