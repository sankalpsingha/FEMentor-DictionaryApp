import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import SearchResult from "./components/SearchResult";
import axios, { AxiosResponse } from "axios";
import { WordData } from "./interfaces/Dictionary.type";

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
    content = <div>Error occurred: {error.message}</div>;
  } else if (searchResult) {
    content = <SearchResult data={searchResult} />;
  }

  return (
    <div className="absolute w-full min-h-screen bg-cream dark:bg-black">
      <div className="mx-auto max-w-3xl md:my-20 px-5 ">
        <Header />
        <SearchInput onSearchTermChange={handleSearchTermChange} />
        {content}
      </div>
    </div>
  );
}

export default Main;
