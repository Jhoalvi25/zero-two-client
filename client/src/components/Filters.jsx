import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterAndSortAnimes } from "../redux/actions/index";
import style from "../style/Filters.module.css";
import parseQuery from "../utils/parseQuery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Filters({setCurrentPage}) {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const genres = useSelector((state) => state.genres);

  //filter & sorts
  const [genresParams, setGenreParams] = useState([]);
  const [sorts, setSorts] = useState("");

  const [showGenres, setShowGenres] = useState(false);
  const [showSort, setShowSort] = useState(false);

  let display = (type) => {
    if (type === "sort") {
      setShowSort(!showSort);
    }
    if (type === "genres") {
      setShowGenres(!showGenres);
    } else {
      return;
    }
  };
  let changeOption = (value, type, e) => {
    e.preventDefault();
    if (type === "genres") {
      if (genresParams.includes(value)) {
        let elIndex = genresParams.indexOf(value);
        let newQuery = [
          ...genresParams.slice(0, elIndex),
          ...genresParams.slice(elIndex + 1),
        ];

        setGenreParams(() => newQuery);
        let params = parseQuery(query, newQuery, type);
        setQuery(() => params);
      
      } else {
        
        let newQuery = [...genresParams, value];
        setGenreParams(() => newQuery);
        let params = parseQuery(query, newQuery, type);  
        setQuery(() => params);

    
      }
    }
    if (type === "sort") {
      if (sorts === e.target.value) {
        let value = "";
        setSorts(() => value);
        let params = parseQuery(query, e.target.value, type);
        setQuery(() => params);
        setCurrentPage(1)
      } else {
        let value = e.target.value;
        setSorts(() => value);
        let params = parseQuery(query, e.target.value, type);
        setQuery(() => params);
        setCurrentPage(1)
      }
    }
  };

  useEffect(() => {
    dispatch(filterAndSortAnimes(query));
  }, [dispatch, query]);
  // console.log(query)

  return (
    <div className={style["options"]}>

      <div className={style["filters"]}>
        <div className={style['filters-selected']} onClick={(e)=> {display('genres')}}>
            <span className={style['filter-s']}>{genresParams.join(', ') || ' Genres '}</span>
            <FontAwesomeIcon icon={faSortDown } className={style['arr-down']}/>
        </div>

        <span className={style['animes']}>/ Animes</span>

        <div className={style["filters-menu"]} style={{display:`${showGenres ? 'flex': 'none'}`}}>
          
          {genres &&
            genres.map((elem, i) => {
              return (
                <label htmlFor={elem.name} className={style.option}>
                  <input id={elem.name} name={elem.name} type={'checkbox'} 
                  key={i} value={elem.name} className={style.checkbox} 
                  onClick={(e)=> changeOption(elem.name, 'genres', e)}>
                   
                  </input>
                
                  {elem.name}
                  <FontAwesomeIcon icon={faCheck} className={style['check']}
                  style={{visibility: `${genresParams.includes(elem.name) ? 'visible': 'hidden'}`}}/>
                </label>
              );
            })}
        </div>
      </div>

      <div className={style['sorts']}>
                <label htmlFor="alphabetic" style={{color:'white'}}>Alphabetic:</label>
                <select name="alphabetic" id={'alphabetic'} onClick={(e)=> changeOption(null, 'sort', e)}>
                    <option value={'ASC'} >Asc</option>
                    <option value={'DESC'} >Desc</option>
                </select>
      </div>
    </div>
  );
}
