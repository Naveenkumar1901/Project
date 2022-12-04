import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import "../styles/searchBar.css";

const SearchBar = ({ value, setSearchValue, filterFunction }) => {
  return (
    <div className="searchSection">
      <BiSearchAlt2 className="searchIcon" />
      <input
        type="text"
        placeholder="Search"
        className="search"
        onChange={(e) => {
          setSearchValue(e.target.value);
          filterFunction && filterFunction(e.target.value);
        }}
        value={value}
      />
      {value?.length ? (
        <IoClose
          className="closeIcon"
          onClick={() => {
            setSearchValue("");
            filterFunction && filterFunction("");
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchBar;
