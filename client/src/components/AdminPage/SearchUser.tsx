

import style from "../../style/SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

export const SearchUser = ():JSX.Element => {
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
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
    </div>
  );
};
export default SearchUser;