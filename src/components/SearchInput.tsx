import React from "react";
import axios from "axios";
import { useQueryClient, useMutation } from "@tanstack/react-query";

const SearchInput = () => {
  const queryClient = useQueryClient();
  const [searchTerm, setSearchTerm] = React.useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("searching for : ", searchTerm);
    setSearchTerm("");
    mutation.mutate(searchTerm);
  };

  const getDictionarySearch = async (searchTerm: string) => {
    return await axios.get(
      "https://api.dictionaryapi.dev/api/v2/entries/en/" + searchTerm
    );
  };
  const mutation = useMutation({
    mutationFn: getDictionarySearch,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["searchResults"] });
    },
  });
  return (
    <div className="md:mt-10 relative">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full bg-offWhiteLight dark:bg-lighterBlack border-transparent focus:ring-0 focus:border-transparent focus:outline-none rounded-2xl pl-5 py-3 font-bold dark:text-white"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="absolute top-4 right-5">
          <img src="/search-icon.svg" className="w-5 h-5" alt="search-icon" />
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
