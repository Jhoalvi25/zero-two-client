import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchAnimeName } from "../redux/Animes/actions";

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
    <div>
      <input
        type="text"
        placeholder="search anime"
        value={name}
        onChange={(e) => handleInputChange(e)}
      />
      <button type="submit" onClick={(e) => handleClick(e)}>
        Search
      </button>
    </div>
  );
};
export default SearchBar;
