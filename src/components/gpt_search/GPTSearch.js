import React from "react";
import SearchBar from "./SearchBar";
import Header from "../Header";

const GPTSearch = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="p-5">
        <SearchBar />
      </div>
    </div>
  );
};

export default GPTSearch;
