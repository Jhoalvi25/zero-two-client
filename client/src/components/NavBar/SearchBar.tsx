import React from "react";
import style from "../../style/NavBar/SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import parseQuery from "../../utils/parseQuery";
import { useLocation } from "react-router-dom";

export const SearchBar = ({ searchName }: { searchName: string }) => {
  const history = useHistory();
  const location = useLocation();

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    let name = e.target.value;
    let params = parseQuery("?", name, "name", "search");
    history.push(`${location.pathname}?${params}`);
  }

  return (
    <div className={style["search-container"]}>
      <input
        className={style["search-input"]}
        type="text"
        placeholder="Search anime..."
        value={searchName}
        onChange={(e) => handleInputChange(e)}
      />

      <button className={style["search-btn"]} type="submit">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className={style["search-icon"]}
        />
      </button>
    </div>
  );
};
export default SearchBar;
