import React from "react";

const SearchInput = () => {
  return (
    <div className="md:mt-10 relative">
      <input
        type="text"
        className="w-full bg-offWhiteLight dark:bg-lighterBlack border-transparent focus:ring-0 focus:border-transparent focus:outline-none rounded-2xl pl-5 py-3 font-bold"
        placeholder="Search"
      />
      <div className="absolute top-4 right-5">
        <img src="/search-icon.svg" className="w-5 h-5" alt="search-icon" />
      </div>
    </div>
  );
};

export default SearchInput;
