import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAnimeEpisode } from '../../redux/actions';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import style from '../../style/EpisodeDetails/EpisodeDetails.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStar } from '@fortawesome/free-solid-svg-icons';

export default function EpisodeDetails () {
    const {idAnime, idEpisode} = useParams();
    const dispatch = useAppDispatch();
    const episode = useAppSelector(state => state.animeEpisode)

  
    useEffect(()=> {
        dispatch(getAnimeEpisode(idAnime, idEpisode))
    },[dispatch, idEpisode, idAnime])
    console.log(episode)
    return(
        <div className={style['episode-container']}>

            <div className={style['episode-video']} 
            style={{backgroundImage: `linear-gradient(61deg, rgba(0,0,0,1) 0%, rgba(19,19,20,0.7903536414565826) 50%, rgba(252,252,255,0.3757878151260504) 100%, rgba(101,5,196,1) 100%, rgba(40,10,88,1) 100%),
            url(${episode.coverImage})`}}>
                <FontAwesomeIcon icon={faPlay}/>
            </div>

            <div className={style['episode-info']}>

                <div className={style['episode-info-header']}>
                    <div className={style['episode-info-header-title']}>
                        <h1>{episode.title} - Episode {episode.number}</h1>
                        <div className={style['episode-info-tags']}>
                            <span className={style['episode-info-tag']}>Air date: {episode.airdate}  </span>
                            <span className={style['episode-info-tag']}>Length: {episode.length} min</span>
                        </div>
                    </div>
                    <div className={style['episode-header-interaction']}>
                        <div className={style['episode-addList']}>
                            <span>Add to favorites</span>
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                    </div>
                </div>
                <h2>Description</h2>
                <p style={{opacity: '.7'}}>{episode.synopsis}</p>
            </div>

            <div className={style['comments-container']}>
                <h2>Comments</h2>
            </div>
        </div>
    )
}