import { CommentInterface} from "../../types/types";
import style from '../../style/Comments/Comment.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faReply, faMinus, faChevronDown, faTrashCan, faPenToSquare, faCheck, faX  } from "@fortawesome/free-solid-svg-icons";
import React, {  useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { changeLikeStatus, deleteComment, editComment, getEpisodeComments, postReply } from "../../redux/actions";
import UserBanner from "./UserBanner";
import ConfirmationAlert from "./ConfirmationAlert";
import LoginAlert from "./LoginAlert";


export default function Comment ({id, replyingTo, content, rating, likes, spoiler, id_episode, user, userId, Replies}:CommentInterface) {
    const dispatch = useAppDispatch();
    const actualUser = useAppSelector(state => state.user);
    const [showReplies , setShowReplies] = useState(false);
    const [isReplying, setIsReplying] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [displayAlert, setDisplayAlert] = useState(false)
    const [displayUserStatus, setDisplayUserStatus] = useState(false);
    const [post, setPost] = useState({   
        "nickname": "",
        "content": '',
        "id_episode": 0,
        "replyingTo": ""
    });


    const displayReplies = () => {
        setShowReplies(!showReplies);
    }


    const startReply = () => {
        if(!actualUser.nickname) setDisplayUserStatus(true);
        else {
            setIsReplying(!isReplying);  
        } 
        // setIsReplying(false);
    }
    const startEdit = () => {
        setIsEditing(!isEditing);
        setPost({...post, content: content})
    }

    const addReply = () => {
        
        dispatch(postReply(post, id_episode, id ? id : 0)).then((val) => {
            dispatch(getEpisodeComments(id_episode))
        })
        setPost({   
            "nickname": "",
            "content": "",
            "id_episode": 0,
            "replyingTo": ""
        })
        
        setIsReplying(!isReplying);   
    }
    const deletePost = (idEpisode: number, idComment: number) => {
    
        dispatch(deleteComment(idEpisode, idComment)).then((val)=> {
            dispatch(getEpisodeComments(id_episode))
           
        })
        setDisplayAlert(false);
        // dispatch(getEpisodeComments(id_episode))
     
    }

    const editPost = (idEpisode: number, idComment: number, post: CommentInterface) => {
        alert('edited');
        dispatch(editComment(idEpisode, idComment, post)).then((val) => {
            dispatch(getEpisodeComments(id_episode));
            setIsEditing(!isEditing);  
        })
        setPost({   
            "nickname": "",
            "content": '',
            "id_episode": 0,
            "replyingTo": ""
        })
    }

    const changeLike = (userId: string, commentId: number) => {
        if(!actualUser.nickname) setDisplayUserStatus(true); 
        else {
            dispatch(changeLikeStatus(userId, commentId)).then(val => {
                dispatch(getEpisodeComments(id_episode));
            })
        }
    }
    const handleChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        const newPost = {...post}
        newPost.content = e.target.value;
        newPost['id_episode'] = id_episode;
        newPost.nickname = actualUser.nickname;
        newPost.replyingTo = user.nickname;
        setPost(newPost);
        console.log(post)
    }
  
    return (
        
        <div className={style['comment-container']}>
            {displayAlert && 
            <ConfirmationAlert 
            confirmCb = {()=> deletePost(id_episode, typeof id === 'number' ? id : 0)}
            cancelCb = {()=> setDisplayAlert(false)}
            />
            }
            {displayUserStatus && 
            <LoginAlert cancelCb={()=> setDisplayUserStatus(false)}/>
            }
            <div className={style['comment-header']}>
                <div className={style['comment-user']}>
                    <div className={style['image-container']}>
                        <img src={`${actualUser.image}`}
                        alt="user" className={style['user-img']}/>
                    </div>
                    <div className={style['user-info']}>
                        <span className={style['user-info-name']}>
                            {actualUser.nickname}
                        </span>
                        <span className={style['user-info-plan']}>
                            {actualUser.plan ==='none' ? 'regular': actualUser.plan==='1' ? 'Genin':
                            actualUser.plan ==='2' ? 'Chuunin': 'Jounin'}
                        </span>
                    </div>
                </div>
                { actualUser.nickname === user.nickname &&
                <div className={style['comment-options']}>
                    <button onClick={startEdit}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                    {/*Revisar lo del 0 para que no haya error en la bd*/ }
                    <button onClick={()=> setDisplayAlert(true)}>
                        <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                </div>
                }
            </div>
            {
            isEditing ? 
            <div className={style["add-reply"]}>
            
             <textarea value={ post.content } name='content' autoFocus
             onChange={(e) => handleChange(e)} placeholder={`Reply...`}
             className={style['edit-comment-content']}
             cols={5} rows={2} />
             <div className={style['add-reply-interactions']}>
                <button onClick={()=>editPost(id_episode, typeof id === 'number' ? id : 0, post)}>
                    <FontAwesomeIcon icon={faCheck} />
                </button>
                <button onClick={startEdit}>
                    <FontAwesomeIcon icon={faX} /> 
                </button>
            </div>
             </div>:
              <div className={style['comment-content']} >
              
              <p >
                {replyingTo && 
                <span>{`@${replyingTo} `}</span>}
                  {content}
              </p>
            </div>
            }
           

            <div className={style['comment-interactions']}>
                <div className={style['comment-interaction']} onClick={startReply}>
                    <FontAwesomeIcon icon={faReply} />
                    <span>Reply</span>
                </div>
                <div className={style['comment-interaction']} onClick={()=> changeLike(actualUser.id , id ? id: 0)}>
                    <FontAwesomeIcon icon={faThumbsUp} />
                    <span>Like</span><span>{likes}</span>
                </div>
            </div>
            {isReplying && 
                    <div className={style["add-reply"]}>
     
                        <UserBanner {...user} />
                        <label>Replying to @{user.nickname}</label>
                        <textarea value={ post.content } name='content' autoFocus 
                        onChange={(e) => handleChange(e)} placeholder={`Reply...`}
                        className={style['reply-comment-content']}
                        cols={5} rows={2} />
                        <div className={style['add-reply-interactions']}>
                            <button onClick={addReply}>Reply</button>
                            <button onClick={startReply}>Cancel</button>
                        </div>
                    </div>
                    }
            <div className={style['comment-replies']}>
                {Replies && 
                <div className={style['replies-amount']} onClick={displayReplies}>
                <span>Replies {Replies?.length}</span>
                {showReplies ? 
                <FontAwesomeIcon icon={faMinus} />: 
                <FontAwesomeIcon icon={faChevronDown} />}
                </div>}
                <div className={style['replies-content']}>
                    {showReplies && Replies?.map((reply:CommentInterface, index:number)=> {
                        return(
                            <Comment 
                            id={reply.id}
                            replyingTo={reply.replyingTo}
                            content={reply.content}
                            rating={reply.rating}
                            likesCount={reply.likesCount}
                            spoiler={reply.spoiler}
                            id_episode={reply.id_episode}
                            userId={reply.userId}
                            user={reply.user}
                            Replies={reply.Replies}
                            likes={reply.likes}
                            />
                        )
                    })}

                </div>
            </div>

           
        </div>
    ) 
}