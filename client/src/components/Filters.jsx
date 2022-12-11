import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterAndSortAnimes } from "../redux/Animes/actions";
import style from '../style/Filters.module.css';
import parseQuery from "../utils/parseQuery";


export default function Filters () {

    const dispatch = useDispatch();
    const [query, setQuery] = useState('');
    const genres = useSelector(state => state.genres);

    //filter & sorts
    const [genresQuery, setGenresQuery] = useState([]);
    const [sorts, setSorts] = useState('');

    const [showGenres, setShowGenres] = useState(false)
    const [showSort, setShowSort] = useState(false)

    let display = (type) => {
        if (type === 'sort') {
            setShowSort(!showSort);
        } 
        if (type === 'genres') {
            setShowGenres(!showGenres);
        } else {
            return
        }
    }
    let changeOption = (value, type, e) => {
        if(type === 'genres') {
            
            if(genresQuery.includes(value)) {
                let elIndex =  genresQuery.indexOf(value);
                let newQuery = [...genresQuery.slice(0, elIndex), ...genresQuery.slice(elIndex + 1)];

                setGenresQuery(()=> newQuery)
                let params = parseQuery(query, newQuery, type)

                setQuery(() => params)
                dispatch(filterAndSortAnimes(query))
                
            } else {
                let newQuery = [...genresQuery, value];
                setGenresQuery(()=> newQuery);
    
                let params = parseQuery(query, newQuery, type);

                setQuery(() => params)
                dispatch(filterAndSortAnimes(query))
            }
            
        
        } 
        if(type === 'sort') {
            
            if(sorts === e.target.value) {
                console.log('value')
                let value = '';
                setSorts(()=> value);
                let params = parseQuery(query, e.target.value, type);
                setQuery(() => params)
            } else {
                console.log(e.target.value)
                setSorts(() => e.target.value)
                let params = parseQuery(query, e.target.value, type);
                setQuery(() => params)
            }
            
        }
    }

    useEffect(() => {
        dispatch(filterAndSortAnimes(query))
    },[dispatch, query])
    // console.log(query)

    return(
        <div className={style['options']}>
            <div className={style['filters']}>
                <div className={style['filters-title']} onClick={()=> display('genres')}>
                    Genres
                </div>
                <div className={style['filters-menu']} style={{display:`${showGenres ? 'block': 'none'}`}}>
                    {genres.length && genres.map(genre => {
                        return(
                            // <div className={style['option']} onClick={()=> changeOption(genre.name, 'genres')} key={genre.id}>{genre.name}</div>
                            <div className={style['option']}  key={genre.id}>
                                <label htmlFor={genre.name}>{genre.name}</label>
                                <input type={'checkbox'} id={genre.name} onChange={()=> changeOption(genre.name, 'genres')}
                                value={genre.name} name={genre.name}/>
                                
                            </div>
                        )
                    })}
                </div>
            </div>

         
            <div className={style['sorts']}>
                <label htmlFor="alphabetic">Alphabetic:</label>
                <select name="alphabetic" id={'alphabetic'} onClick={(e)=> changeOption(null, 'sort', e)}>
                    <option value={'ASC'} >Asc</option>
                    <option value={'DESC'} >Desc</option>
                </select>
            </div>
            
            
        </div>
    ) 
}