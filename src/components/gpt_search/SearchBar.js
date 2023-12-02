import React from "react";

const SearchBar = () => {
  return (
    <div>
      <form className="">
        <input
          className="p-2 w-[700px] border border-black"
          type="text"
          placeholder="Search your mind!!"
        />
        <button className="ml-4 p-1 bg-black text-white">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
