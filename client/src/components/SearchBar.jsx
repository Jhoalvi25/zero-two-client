import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchAnimeName } from "../redux/Animes/actions";
import style from "../style/SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
export const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    setName(e.target.value);
  }
  function handleClick(e) {
    dispatch(searchAnimeName(name));
  }

  return (
    <div className={style["search-container"]}>
   
        <input className={style['search-input']}
          type="text"
          placeholder="Search anime..."
          value={name}
          onChange={(e) => handleInputChange(e)}
        />

        <button
          className={style["search-btn"]}
          type="submit"
          onClick={(e) => handleClick(e)}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} className={style['search-icon']}/>
        </button>
   
    </div>
  );
};
export default SearchBar;
