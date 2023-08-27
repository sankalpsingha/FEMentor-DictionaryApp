import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import SearchResult from "./components/SearchResult";
import axios, { AxiosResponse } from "axios";
import { WordData } from "./interfaces/Dictionary.type";
import Error from "./components/Error";
const getDictionarySearch = (searchTerm: string) => {
  return axios
    .get("https://api.dictionaryapi.dev/api/v2/entries/en/" + searchTerm)
    .then((response: AxiosResponse<WordData[]>) => {
      // console.log("response", response);
      return response.data;
    });
};

function Main() {
  // console.log("data", data);
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [searchResult, setSearchResult] = useState<WordData[] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [fontClass, setFontClass] = useState("sans");

  const handleChangeFontClass = (newFontClass: string) => {
    setFontClass(newFontClass); // Updates the font class in main component
  };

  // get the search results from axios when the searchTerm changes
  useEffect(() => {
    if (searchTerm) {
      getDictionarySearch(searchTerm)
        .then((result) => {
          setSearchResult(result);
          setError(null);
        })
        .catch((err) => {
          setSearchResult(null);
          setError(err);
        });
    } else {
      setSearchResult(null);
      setError(null);
    }
  }, [searchTerm]);

  const handleSearchTermChange = (results: string) => {
    setSearchTerm(results);
  };

  let content;
  if (!searchTerm) {
    content = null;
  } else if (error) {
    content = <Error faultyWord={searchTerm} />;
  } else if (searchResult) {
    content = <SearchResult data={searchResult} />;
  }

  console.log("fontClass", fontClass);

  return (
    <div
      className={`absolute w-full min-h-screen bg-cream dark:bg-black font-${fontClass}`}
    >
      <div className="mx-auto max-w-3xl md:my-20 px-5 ">
        <Header onChangeFontClass={handleChangeFontClass} />
        <SearchInput onSearchTermChange={handleSearchTermChange} />
        {content}
      </div>
    </div>
  );
}

export default Main;
