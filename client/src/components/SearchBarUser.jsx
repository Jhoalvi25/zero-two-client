import React from "react";

import style from "../style/SearchBar.module.css";
import Search from "../img/buscar.png";

export const SearchBarUser = () => {
  return (
    <div className={style["search-container"]}>
      <div className={style["input-icons"]}>
        <input
          type="text"
          className={style["input-search"]}
          placeholder="Search user..."
        />
        {/* 
        <button className={style["button"]} type="submit">
          Search
        </button> */}
        <img className={style["search-icon"]} src={Search} alt="search" />
      </div>
    </div>
  );
};
export default SearchBarUser;
