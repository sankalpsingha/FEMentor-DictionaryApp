import React from "react";

import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import SearchResult from "./components/SearchResult";

function App() {
  return (
    <div className="absolute w-full h-full bg-cream dark:bg-black">
      <div className="mx-auto max-w-3xl md:my-20 px-5 ">
        <Header />
        <SearchInput />
        <SearchResult />
      </div>
    </div>
  );
}

export default App;
