import React from "react";
import './SearchBar.scss';
import Input from "../Input/Input";
import { ReactComponent as Search } from "../../assets/svgs/search.svg";
import { ReactComponent as DownArrow } from "../../assets/svgs/downArrow.svg";

function SearchBar({ suffixIcon1, placeholder }) {
  return (
    <div className="search">
      <Input forLabel="search" prefix={<Search />} type="text" name="search" placeholder={placeholder} id="search" className='searchBar' suffixIcon1={suffixIcon1} />
    </div>
  );
}

export default SearchBar;
