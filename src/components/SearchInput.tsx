import React from "react";

interface SearchInputProps {
  onSearchTermChange: (term: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearchTermChange }) => {
  // const queryClient = useQueryClient();
  const [searchTerm, setSearchTerm] = React.useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearchTermChange(searchTerm);
    setSearchTerm("");
  };

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
