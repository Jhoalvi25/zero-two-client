import {  useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { addListAnime, deleteAnimeInList, getAnimeById, getAnimeEpisodes, getAllListsUser, getListFavorite, clearDetailList } from "../../redux/actions/index";
import style from '../../style/AnimeDetailPage/AnimeDetail.module.css';
import Tag from '../UtilsComponents/Tag';
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Loading from "../UtilsComponents/Loading";
import missingImage from '../../img/missing.jpg';
import NotFound from "../UtilsComponents/NotFound";
import {  Episode, Genre } from "../../types/types";
import { isError } from "../../types/typeGuards";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";
import ListComponent from "../User/Options/ListComponenet";
import imageNotFound from "../../img//png_image_notListFound.png";
import { useHistory } from "react-router-dom";

export default function AnimeDetail () {

    const {idAnime}:{idAnime:string} = useParams();
    const dispatch = useAppDispatch()
    const history = useHistory();

    const anime = useAppSelector((state) => state["animeDetails"]); 
    const episodes = useAppSelector(state => state["animeEpisodes"]);
    const detailList = useAppSelector((state) => state["listDetail"]);
    const allListsFromUser = useAppSelector((state) => state["userLists"])
    const userInfo = useAppSelector((state) => state.user);


    const [modal, setModal] = useState(false);

    const myRef  = useRef<HTMLDivElement | null>(null)
    const [loading, setLoading] = useState(false);
    const [ready, setReady] = useState(false);
    
    
    useEffect(()=> {
        dispatch(getListFavorite(userInfo.id)).then(() => setReady(true));
        dispatch(getAllListsUser(userInfo.id));
        
        myRef.current?.scrollIntoView({behavior: "smooth", block: "start"});
        setLoading(true);
        dispatch(getAnimeById(idAnime));

        dispatch(getAnimeEpisodes(Number(idAnime))).finally(()=> {
            setLoading(false);
        })
        return () => {
            dispatch(clearDetailList());
            document.body.classList.remove(style['active-modal']);
        }
    },[dispatch, idAnime, userInfo.id]);

    const toggleAddAnimeList = async (listId: number) => {
        const animeToAdd = {anime: idAnime, list: listId};
        try {
          await dispatch(addListAnime(animeToAdd));
          history.push(`/profile/list/${listId}`);
        } catch (error: any) {
            console.log(error);
        }
    }

    const toggleModal = () => {
        setModal(!modal);
    }


    const toggleFavorite = async () => {
        try {
            if(detailList.id === null) return;
            const checkAnimeAdded = detailList.animes.find(anime => anime.id === Number(idAnime)); 
            if(!checkAnimeAdded) {
                const animeToFavorite = {anime: Number(idAnime), list: detailList.id};
                await dispatch(addListAnime(animeToFavorite));
                await dispatch(getListFavorite(userInfo.id));
                alert('Anime Added to Favorites!');
            } else {
                const animeToDel = {anime: Number(idAnime), list: detailList.id};
                await dispatch(deleteAnimeInList(animeToDel));
                await dispatch(getListFavorite(userInfo.id));
                alert('Anime Deleted of Favorites!');
            }
        } catch (error: any) {
            console.log(error);
        }
    }

    if(modal) {
        document.body.classList.add(style['active-modal'])
    } else {
        document.body.classList.remove(style['active-modal'])
    }


    return (
        
        loading ? <Loading />: 
       
        
        <div className={style['animeDetail']} ref={myRef}>
            <div className={style['animeDetail-header']}  
            style={{backgroundImage:`url(${anime.coverImage})`}}>
                <div className={style['cover']}>

                    <div className={style['cover-img-container']}>
                        <img src={anime.posterImage } alt={`anime x cover`} className={style['poster-img']}/>
                    </div>
                    
                    <div className={style['cover-info-container']}>
                        <h2 className={style['cover-info-container-h2']}>{anime.name}</h2>
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
                            <div onClick={toggleFavorite} className={style['lists-span']}>
                                {
                                    ready && detailList.animes.find(anime => anime.id === Number(idAnime)) ?
                                    (
                                        <FontAwesomeIcon icon={faCheck} /> 
                                    ) : (
                                        <FontAwesomeIcon icon={faBookmark} />
                                    )
                                }
                                <span>Add to favorites</span>
                            </div>
                            <div onClick={toggleModal} className={style['lists-span']}>
                                <FontAwesomeIcon icon={faPlus} className={style['icon']} />
                                <span>Append to a new list</span>
                                
                            </div>
                            <div>
                            {
                                    modal && (
                                        <div className={style['modal']}>
                                        <div onClick={toggleModal} className={style['overlay']}></div>
                                        <div className={style['modal-content']}>
                                            <h2 className={style['title-modal']}>Add the Anime into a List</h2>
                                            <Link  to="/profile/list">
                                                <button onClick={toggleModal} className={style['button-create-list-modal']}>
                                                    <FontAwesomeIcon icon={faPlus} />
                                                    Create new List
                                                </button> 
                                            </Link>
                                    <div className={style["div_lisComponent_overflow"]}>
                                    {
                                        allListsFromUser.length ? allListsFromUser.map((list: any, key) => {
                                            return (
                                                <div className={style["lisComponent_style"]} onClick={() => toggleAddAnimeList(list.id)} key={key}>
                                                    <ListComponent showOptions={false} props={list} key={key}/>
                                                </div>
                                            )
                                        }) : 
                                        <div className={style['content-notFound']}>
                                            <img className={style['img_notFound']} src={imageNotFound} alt="img not found" />
                                            <p className={style['text_notFound_1']}>There are no list here.</p>
                                            <p className={style['text_notFound_2']}>Create one!</p>
                                        </div>
                                    }
                                    </div>
                                            <div className={style['form-nicolas']}>
                                                <div className={style['div-buttons']}>
                                                    <button onClick={toggleModal} className={style['button-create-list-modal']} type="button">Cancel</button>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    )
                                }
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
                  
                  {episodes.map((episode:Episode, i) => {
                      return(
                        <Link to ={{pathname: `/watch/${idAnime}/${episode.id}`,
                        state: {episode}}} key={i}>
                            
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
