import style from '../../style/Comments/LoginAlert.module.css';
import img from '../../img/animeImg1.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
interface Props {
    cancelCb: () => void
}
export default function LoginAlert ({cancelCb}:Props) {

    return (
        <div className={style['modal']}>
             <div className={style['overlay']} onClick={cancelCb}>
            
            </div>
            <div className={style['content']}>
                <button className={style['content-close-btn' ]}onClick={cancelCb}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                <h1 className={style['content-msg']}>
                    Account needed
                </h1>
                <div className={style['content-img-container']}>
                    <img src={img} alt='anime decoration for login' className={style['content-img']}/>
                </div>
                
                <p className={style['ad']}>You must be logged in for any interaction in the comments section!</p>
                <div className={style['content-options']}>
                    <button className={style['confirm']} >
                        <Link to='/login' >Login</Link>
                    </button>
                    <button className={style['cancel']} >
                        <Link to='/register' >Create</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}