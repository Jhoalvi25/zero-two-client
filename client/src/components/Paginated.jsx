import React from "react";

export default function Pagination({ cardPerPage, totalCards, pagination }) {
  /*   console.log("cardperpage", cardPerPage);
  console.log("total", totalCards);
  console.log("paginado", pagination); */
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCards / cardPerPage); ++i) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="pagination">
        {pageNumbers.length <= 1 ? (
          <></>
        ) : (
          <nav>
            <ul>
              {pageNumbers?.map((p) => (
                <div className="pag" key={p}>
                  <button className="page-link" onClick={() => pagination(p)}>
                    {p}
                  </button>
                </div>
              ))}
            </ul>
          </nav>
        )}
      </ul>
    </div>
  );
}
