import css from '../style/Pagineted.module.css'

const Paginated = ({pagine, animes, currentPagineChange})=>{
    const numbersPagine = []

    for(let index = 1; index <= Math.ceil(animes.length /pagine); index++){
        numbersPagine.push(index)
    }
    console.log(numbersPagine)
    return(
        <div className={css.container}>
            <ul className={css.list}>
                {numbersPagine && numbersPagine.map((number)=>(
                            <li  className={css.list__numbers} key={number}>
                                <button className={css.list__button} onClick={()=>currentPagineChange(number)}>{number}</button>
                            </li>
                )) }
            </ul>
        </div>
    )

}


export default Paginated