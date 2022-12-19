import React, { useEffect } from "react";
import { useState } from "react";
import style from "../style/Filters.module.css";
import parseQuery from "../utils/parseQuery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Filters({search, filterParams}) {

  const [filters, setFilters] = useState({})
  const genres = useSelector((state) => state.genres);
  const history = useHistory();
  //filter & sorts

  const [showFilters, setShowFilters] = useState(false);
 

  let display = () => {

    setShowFilters(!showFilters);

  };
  let changeOption = (e, type) => {
    e.preventDefault();

    let paramValue = e.target.value;
    let paramName = e.target.name
    
    if (filters[paramName].includes(paramValue)) {
      let elIndex = filters[paramName].indexOf(paramValue);
      let newParamValue = [
        ...filters[paramName].slice(0, elIndex),
        ...filters[paramName].slice(elIndex + 1),
      ];

      let params = parseQuery(search, newParamValue, paramName, type);
      history.push(`/animes?${params}`);
      
    } else {
        
      let newParamValue = [...filters[paramName], paramValue];
      let params = parseQuery(search, newParamValue, paramName, type);  
      history.push(`/animes?${params}`);
    
      }
  };

  useEffect(()=> {
    setFilters(()=> {
      let newObj = {}
      Object.entries(filterParams).forEach(([key, value]) => {
        newObj[key] = value ? value?.split(','): []
      })
      return newObj
    })
  }, [filterParams])
  // console.log(query)

  return (
   

      <div className={style["filters"]}>
        <div className={style['filters-selected']} onClick={(e)=> {display('genres')}}>
            <span className={style['filter-s']}>{filters['genres']?.join(', ') || ' Genres '}</span>
            <FontAwesomeIcon icon={faSortDown } className={style['arr-down']}/>
        </div>

        <span className={style['animes']}>/ Animes</span>

        <div className={style["filters-menu"]} style={{display:`${showFilters ? 'flex': 'none'}`}}>
          
          {genres &&
            genres.map((elem, i) => {
              return (
                <label htmlFor={elem.name} className={style.option} key={elem.name + i}>
                  <input id={elem.name} name={'genres'} type={'checkbox'} 
                  key={i} value={elem.name} className={style.checkbox} 
                  onClick={(e)=> changeOption(e, 'filters')}>
                   
                  </input>
                
                  {elem.name}
                  <FontAwesomeIcon icon={faCheck} className={style['check']}
                  style={{visibility: `${filters['genres']?.includes(elem.name) ? 'visible': 'hidden'}`}}/>
                </label>
              );
            })}
        </div>
      </div>
   
  );
}
