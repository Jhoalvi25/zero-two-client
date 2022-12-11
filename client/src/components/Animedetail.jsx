import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAnimeById, getAnimeEpisodes } from "../redux/Animes/actions";
import style from '../style/AnimeDetail.module.css';
import Tag from './Tag.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmileWink } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

export default function AnimeDetail () {
    const {id} = useParams();
    const dispatch = useDispatch();

    const anime = useSelector(state => state.animeDetails);
    const episodes = useSelector(state => state.animeEpisodes);

    const [loading, setLoading] = useState(false);
    useEffect(()=> {
        setLoading(true);
        dispatch(getAnimeById(id));

        dispatch(getAnimeEpisodes(id)).then(()=> {
            setLoading(false);
        })
    },[dispatch, id])
    // console.log(anime)
    // console.log(episodes)
    return (
        loading ? <p>loading...</p>: anime.error ? <p>{anime.error.message}</p>:
        anime && 
        <div className={style['animeDetail']} >
            <div className={style['animeDetail-header']}  
            style={{backgroundImage:`url(${anime.coverImage})`}}>
                <div className={style['cover']}>

                    <div className={style['cover-img-container']}>
                        <img src={anime.posterImage} alt={`anime x cover`} className={style['poster-img']}/>
                    </div>

                    <div className={style['cover-info-container']}>
                        <h2>{anime.name}</h2>
                        <Tag title={anime.ageRatingGuide} bgColor={'black'} color={'white'}/>
                        <Tag title={anime.status} bgColor={'#120B39'} color={'#CB8442'}/>
                        <div className={style['doubleTag']}>
                            <span className={style['first']}>Rating</span>
                            <span className={style['second']}>{anime.averageRating}</span>
                        </div>
                        <div className={style['doubleTag']}>
                            <span className={style['first']}>Views</span>
                            <span className={style['second']}>{anime.userCount}</span>
                        </div>
                    </div>
                </div>
                <div className={style['about']}>
                    <iframe width="100%" height="315" src={`https://www.youtube.com/embed/${anime.youtubeVideoId}`} 
                    title="YouTube video player" frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                        
                    </iframe>
                </div>
            </div>


            <div className={style['animeDetail-content']}>
                <div className={style['animeDetail-content-info']}>
                    <h3>Synopsis</h3>
                    <p>{anime.synopsis}</p>
                    {/* <div className={style['genresTags']}> */}
                    {anime.genres && anime.genres.map(genre => {
                        return(
                            <Tag title={genre.name} bgColor={'#1A0750'} color={'white'} padding={'.5em'} key={genre.id}/>
                        )
                    })}
                    {/* </div> */}
                    <div className={style['favorite-count']}>
                        <span>Favorite count: {anime.favoritesCount}</span>
                        <div className={style['btn-favorite']}>
                            <FontAwesomeIcon icon={faFaceSmileWink}/>
                        </div>   
                    </div>

                </div>

                <h2 style={{textAlign: 'center', padding:'2em', color:'#1A0750'}}>Episodes</h2>

                <div className={style['episodes']}>
                  
                    {episodes.length && episodes.map(episode => {
                        return(
                        <div className={style['episode']} key={episode.id}>
                            <div className={style['episode-header']}>
                                <span>{episode.title}</span>
                                <span>{` - Season ${episode.seasonNumber} - Episode ${episode.number}`}</span>
                            </div>
                            <div className={style['episode-content']}>
                                <img src={episode.thumbnail?.original} alt={'anime img'} className={style['episode-img']} />
                                <div className={style['episode-content-min']}>{episode.length} min</div>
                                <div className={style['episode-content-play']}>
                                    <FontAwesomeIcon icon={faCirclePlay} />
                                </div>
                            </div>
                        </div>
                        )
                    })}
                    
                    
                </div>
            </div>
            
        </div>
    )
}
