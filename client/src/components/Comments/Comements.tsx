import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import style from '../../style/Comments/Comments.module.css';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {  getEpisodeComments, postComment } from '../../redux/actions';
import Comment from './Comment';
import UserBanner from './UserBanner';
import { Link } from 'react-router-dom';


export default function Comments () {
    const {idEpisode} = useParams();
    const dispatch = useAppDispatch();

    const comments = useAppSelector(state => state.episodeComments);
    const user = useAppSelector(state => state.user);
    const [post, setPost] = useState({   
        "nickname": '',
        "content": '',
        "id_episode": 0
    });
    
    const addComment = () => {
        dispatch(postComment(post, idEpisode)).then((val) => {
            dispatch(getEpisodeComments(idEpisode))
        })

        setPost({   
            "nickname": '',
            "content": '',
            "id_episode": 0
        })
    }

  
    const handleChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        const newPost = {...post}
        newPost.content = e.target.value;
        newPost['id_episode'] = idEpisode;
        newPost.nickname = user.nickname;
        setPost(newPost);
    }
    
    useEffect(()=> {
        dispatch(getEpisodeComments(idEpisode))
     
    }, [dispatch, idEpisode])
    
   
    return (
        
        <div className={style['comments-container']}>
            <h2>Comments {`(${comments.length})`}</h2>
            {
                user.nickname ? 

                <div className={style['add-comment']}>
                    <label>Add comment</label>
                    <UserBanner {...user}/>
                    <textarea value={ post.content } name='content'
                    onChange={(e) => handleChange(e)} placeholder={'Post a comment...'}
                    cols={100} rows={2}/>
                    <div className={style['add-comment-interactions']}>
                        <button onClick={addComment}>Comment</button>
                        <button>Cancel</button>
                    </div>
                </div>:

                <div className={style['no-comment']}>
                    <span className={style['title']}>Account required</span>
                    <p>Please {" "}
                        <Link to='/login'>Login{" "}</Link>or{" "}
                        <Link to='/register'>Create </Link>
                        an account to comment
                    </p>

                </div>
            }
            
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
                    likes={comment.likes}
                    />
                )
            })}
            </div>
           
        </div>
    )
}