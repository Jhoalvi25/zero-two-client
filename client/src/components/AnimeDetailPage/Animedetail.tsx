import { Dispatch, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnimeById, getAnimeEpisodes } from "../../redux/actions/index";
import style from '../../style/AnimeDetailPage/AnimeDetail.module.css';
import Tag from '../Tag';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmileWink } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import Loading from "../Loading";
import missingImage from '../../img/missing.jpg';
import NotFound from "../NotFound";
import { Anime, Episode, ErrorResponse, Genre } from "../../types/types";
import { isError } from "../../types/typeGuards";
import { Link } from "react-router-dom";

 function isEmptyObject (input: any): input is {} {
    if (typeof input === 'object' && !Object.entries(input).length) return true;
    else return false;
}


export default function AnimeDetail () {
    const {idAnime}:{idAnime:string} = useParams();
    const dispatch = useAppDispatch()
    const anime = useAppSelector((state) => state["animeDetails"]); 
    const episodes = useAppSelector(state => state["animeEpisodes"]);
    const containerRef = useRef()
    const [loading, setLoading] = useState(false);
   
    useEffect(()=> {
      
        containerRef.current.scrollIntoView({behaviour: "smooth", block: "start"});
        setLoading(true);
        dispatch(getAnimeById(idAnime));

        dispatch(getAnimeEpisodes(Number(idAnime))).finally(()=> {
            setLoading(false);
        })
    },[dispatch, idAnime])

    return (
        
        loading ? <Loading />: 
       
        
        <div className={style['animeDetail']} ref={containerRef}>
            <div className={style['animeDetail-header']}  
            style={{backgroundImage:`url(${anime.coverImage})`}}>
                <div className={style['cover']}>

                    <div className={style['cover-img-container']}>
                        <img src={anime.posterImage } alt={`anime x cover`} className={style['poster-img']}/>
                    </div>
                    
                    <div className={style['cover-info-container']}>
                        <h2>{anime.name}</h2>
                        <div className={style['tags']}>
                            <Tag title={typeof anime.status === 'string' ? anime.status: '' } bgColor={'transparent'} color={'white'}/>
                            <Tag title={typeof anime.showType === 'string' ? anime.showType: ''} bgColor={'transparent'} color={'white'}/>
                            <Tag title={typeof anime.ageRatingGuide === 'string' ? anime.ageRatingGuide: ''} bgColor={'transparent'} color={'white'}/>
                            <div className={style['doubleTag']}>
                                <span className={style['first']}>Rating</span>
                                <span className={style['second']}>{anime.averageRating}</span>
                            </div>
                            <div className={style['doubleTag']}>
                                <span className={style['first']}>Views</span>
                                <span className={style['second']}>{anime.userCount}</span>
                                
                            </div>
                        </div>
                        <div className={style['lists']}>
                            <div className={style['list']}>
                                <span>Add to favorites</span>

                            </div>
                            <div className={style['list']}>
                                <span>Append to a new list</span>
                            </div>
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
                    <p style={{opacity: '.7'}}>{anime.synopsis}</p>
                    {/* <div className={style['genresTags']}> */}
                    {anime.genres && anime.genres.map((genre:Genre) => {
                        return(
                            <Tag title={genre.name} bgColor={'#1A0750'} color={'white'} padding={'.5em'} key={genre.id}/>
                        )
                    })}
                    {/* </div> */}
                    {/* <div className={style['favorite-count']}>
                        <span>Favorite count: {anime.favoritesCount}</span>
                        <div className={style['btn-favorite']}>
                            <FontAwesomeIcon icon={faFaceSmileWink}/>
                        </div>   
                    </div> */}

                </div>

                <h3 style={{textAlign: 'left', padding:'2em', color:'#1A0750'}}>Episodes</h3>
                {!isError(episodes) ?
                <div className={style['episodes']}>
                  
                  {episodes.map((episode:Episode) => {
                      return(
                        <Link to ={{pathname: `/animes/${idAnime}/${episode.id}`,
                        state: {episode}}}>
                            
                            <div className={style['episode']} key={episode.id}>
                                <div className={style['episode-header']}>
                                    <span>{episode.title} E{episode.number}</span>
                                    <span style={{opacity: '.5'}}>{`Season - ${episode.seasonNumber}`}</span>
                                </div>
                                <div className={style['episode-content']}>
                                    <img src={ episode.thumbnail === null ? missingImage: episode.thumbnail?.original} alt={'anime img'} 
                                    className={style['episode-img']} style={episode.thumbnail === null ? {filter:'grayscale(1)'}: {}}/>
                                    <div className={style['episode-content-min']}>{episode.length} min</div>
                                    {/* <div className={style['episode-content-play']}>
                                        <FontAwesomeIcon icon={faCirclePlay} />
                                    </div> */}
                                </div>
                            </div>
                      </Link>
                      )
                  })}
              </div>: <NotFound msg={episodes.error.message}/> }
                
            </div>
            
        </div>
    )
}
