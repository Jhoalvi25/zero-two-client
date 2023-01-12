import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "../../style/AnimesPage/Paginated.module.css";
import parseQueryPage from "../../utils/parseQueryPage";

interface PaginationType {
    totalPages: number,
    search: string, 
    page: number | string
}
export default function Pagination({ totalPages, search, page}:PaginationType) {
  const location = useLocation();

  page = Number(page)

  let pagesToShow = ()=> {
 
      let i = 0;
      let myPages = []

      while (i < totalPages) {
          i++;
          myPages.push(
              <Link to={`${location.pathname}?${parseQueryPage(search, i, 'page', 'page')}`} 
              className='page' key={i}>
                   <button className={style['page']}
                                key={i}>
                                  {i}
                    </button>
              </Link>
              )
      }
      return myPages;
  }

  return (
    <div className={style['pagination-container']}>

      <div className="pagination-prev">
                {
                    page - 1 > 0 ? 
                    <div className="previous">
                        <Link to ={`${location.pathname}?${parseQueryPage(search, page, 'page', 'page', 'prev')}`} >Previous</Link>
                    </div>:

                    <div className="previous">
                         <Link to ={`${location.pathname}?${parseQueryPage(search, page, 'page', 'page', 'prev')}`}  style={{pointerEvents: 'none', opacity: '.7'}}>Previous</Link>
                    </div>
                }
            </div>

      <div className={style['pagination-pages']}>
      {
                    pagesToShow()?.map((pageA, i) => {

                        if(page === i + 1) {
                            return  ( 
                            <Link to={`${location.pathname}?${parseQueryPage(search, i, 'page', 'page')}`} 
                            className='page' id='page-active' key={i + 1} >

                                <button className={style['page-selected']}
                                key={page}>
                                  {page}
                                </button>
                                

                            </Link>)
                        } else return( pageA)
                    })
      }
      </div>

      <div className="pagination-next">
                {
                    page + 1 > totalPages || page + 1 < 0?
                    <div className="next">
                        <Link to={`${location.pathname}?${parseQueryPage(search, page, 'page', 'page', 'next')}`} style={{pointerEvents: 'none', opacity: '.7'}}>Next</Link>
                    </div>:
                    <div className="next">
                        <Link to={`${location.pathname}?${parseQueryPage(search, page, 'page', 'page', 'next')}`}>Next</Link>
                    </div>
                }
            </div>
    </div>
  );
}
