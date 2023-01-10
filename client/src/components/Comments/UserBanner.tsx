import { UserInterface } from "../../types/types";
import style from '../../style/Comments/UserBanner.module.css';
import defaultImg from '../../img/vecteezy_mask-kitsune-illustration-with-fire-black-and-white_6633452.jpg';

export default function UserBanner (user: UserInterface) {
    console.log('user' , user)
    return (
        <div className={style['comment-user']}>
                <div className={style['image-container']}>
                    <img src={`${!user.image ? defaultImg : user.image }`}
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
    )
}