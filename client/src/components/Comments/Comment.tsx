import { CommentInterface} from "../../types/types";
import style from '../../style/Comments/Comment.module.css';
import defaultImg from '../../img/vecteezy_mask-kitsune-illustration-with-fire-black-and-white_6633452.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faReply } from "@fortawesome/free-solid-svg-icons";

export default function Comment ({id, replyingTo, content, rating, likesCount, spoiler, id_episode, user, userId, Replies}:CommentInterface) {
    return (
        <div className={style['comment-container']}>

            <div className={style['comment-user']}>
                <div className={style['image-container']}>
                    <img src={`${!user.profileImg ? defaultImg : user.profileImg }`}
                     alt="user image" className={style['user-img']}/>
                </div>
                <div className={style['user-info']}>
                    <span className={style['user-info-name']}>
                        {user.nickname}
                    </span>
                    <span className={style['user-info-plan']}>
                        {user.plan !== "0" ? 'Premium' : 'Regular'}
                    </span>
                </div>
            </div>

            <div className={style['comment-content']}>
                <p>{content}</p>
            </div>

            <div className={style['comment-interactions']}>
                <div className={style['comment-interaction']}>
                    <FontAwesomeIcon icon={faReply} />
                    <span>Reply</span>
                </div>
                <div className={style['comment-interaction']}>
                    <FontAwesomeIcon icon={faThumbsUp} />
                    <span>Like</span>
                </div>
            </div>

            <div className={style['comment-replies']}>
                <div className={style['replies-amount']}>
                    Replies {Replies?.length}
                </div>
                <div className={style['replies-content']}>
                    {Replies?.length && Replies?.map((reply:CommentInterface, index:number)=> {
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
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    ) 
}