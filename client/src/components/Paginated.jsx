import React from "react";
import style from "../style/Paginated.module.css";

export default function Pagination({ cardPerPage, totalCards, pagination, currentPage }) {
  /*   console.log("cardperpage", cardPerPage);
  console.log("total", totalCards);
  console.log("paginado", pagination); */
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCards / cardPerPage); ++i) {
    pageNumbers.push(i);
  }

  console.log("render");

  return (
    <div>
      <ul className="pagination">
        {/* {pageNumbers.length <= 1 ? (
          <></>
        ) : ( */}
        <nav className={style.page}>
          <ul>
            <div className="pag" >
            {pageNumbers &&
              pageNumbers?.map((p) => (
                  <button className={p === currentPage ? style[`page-selected`] : style["page-link" ]}
                  onClick={() => pagination(p)} key={p}>
                    {p}
                  </button>
              ))}
            </div>
          </ul>
        </nav>
        {/* )} */}
      </ul>
    </div>
  );
}
