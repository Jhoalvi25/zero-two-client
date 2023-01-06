import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import style from '../../style/Comments/Comments.module.css';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getEpisodeComments } from '../../redux/actions';
import Comment from './Comment';


export default function Comments () {
    const {idEpisode} = useParams();
    const dispatch = useAppDispatch();

    const comments = useAppSelector(state => state.episodeComments);

    useEffect(()=> {
        dispatch(getEpisodeComments(idEpisode))
    }, [dispatch, idEpisode])
    
    console.log(comments)
    return (
        
        <div className={style['comments-container']}>
            <h2>Comments {`(${comments.length})`}</h2>
            <div className={style['comments-content']}>
            {comments.map((comment, index)=> {
                return(
                    <Comment
                    id={comment.id}
                    replyingTo={comment.replyingTo}
                    content={comment.content}
                    rating={comment.rating}
                    likesCount={comment.likesCount}
                    spoiler={comment.spoiler}
                    id_episode={comment.id_episode}
                    userId={comment.userId}
                    user={comment.user}
                    Replies={comment.Replies}
                    />
                )
            })}
            </div>
           
        </div>
    )
}