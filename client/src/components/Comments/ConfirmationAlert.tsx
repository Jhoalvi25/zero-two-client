import style from '../../style/Comments/ConfirmationAlert.module.css';

// import bg from '../../img/bg1.jpg';

interface Props {
    confirmCb: ()=> void,
    cancelCb: () => void
}
export default function ConfirmationAlert ({confirmCb, cancelCb}:Props) {

    return (
        <div className={style['modal']}>
             <div className={style['overlay']} onClick={cancelCb}>
            
            </div>
            <div className={style['content']}>
                <p className={style['content-msg']}>
                    Are you sure you want to delete this post?
                </p>
                <p className={style['ad']}>The changes made will not be redone!</p>
                <div className={style['content-options']}>
                    <button className={style['confirm']} onClick={confirmCb}>
                        Confirm
                    </button>
                    <button className={style['cancel']} onClick={cancelCb}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}