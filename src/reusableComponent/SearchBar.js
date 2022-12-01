import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import "../styles/searchBar.css";

const SearchBar = () => {
  return (
    <div className="searchSection">
      <BiSearchAlt2 className="searchIcon" />
      <input type="text" placeholder="Search" className="search" />
      <IoClose className="closeIcon" />
    </div>
  );
};

export default SearchBar;
