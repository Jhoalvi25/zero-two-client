import React from "react";
import { Link } from "react-router-dom";
import style from "../style/Paginated.module.css";
import parseQuery from "../utils/parseQuery";

interface Pagination {
    totalPages: number,
    search: string, 
    page: number | string
}
export default function Pagination({ totalPages, search, page}:Pagination) {
  
  page = Number(page)

  let pagesToShow = ()=> {
 
      let i = 0;
      let myPages = []

      while (i < totalPages) {
          i++;
          myPages.push(
              <Link to={`/animes?${parseQuery(search, i, 'page', 'page')}`} 
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
                        <Link to ={`/animes?${parseQuery(search, page, 'page', 'page', 'prev')}`} >Previous</Link>
                    </div>:

                    <div className="previous">
                         <Link to ={`/animes?${parseQuery(search, page, 'page', 'page', 'prev')}`}  style={{pointerEvents: 'none', opacity: '.7'}}>Previous</Link>
                    </div>
                }
            </div>

      <div className={style['pagination-pages']}>
      {
                    pagesToShow()?.map((pageA, i) => {

                        if(page === i + 1) {
                            return  ( 
                            <Link to={`/animes?${parseQuery(search, i, 'page', 'page')}`} 
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
                        <Link to={`/animes?${parseQuery(search, page, 'page', 'page', 'next')}`} style={{pointerEvents: 'none', opacity: '.7'}}>Next</Link>
                    </div>:
                    <div className="next">
                        <Link to={`/animes?${parseQuery(search, page, 'page', 'page', 'next')}`}>Next</Link>
                    </div>
                }
            </div>
    </div>
  );
}
