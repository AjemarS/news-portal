"use client";

import React, { useState } from "react";
import { useSearchResults } from "./SearchResultsProvider";
import { getSearchResults } from "../actions";

const SearchInput: React.FC = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const setSearchResults = useSearchResults().setSearchResults;

  const handleSearch = async () => {
    if (!query) return;
    const searchResults = await getSearchResults(query);
    setSearchResults(searchResults);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search"
        className="px-1 py-0.5 rounded-sm mr-1 border border-gray-400 dark:border-stone-700"
      />
      <button
        onClick={handleSearch}
        className="rounded bg-slate-300 dark:bg-stone-900 hover:bg-slate-400 dark:hover:bg-stone-800 active:bg-slate-300 dark:active:bg-stone-900 border-gray-400 dark:border-stone-700 active:border-2 border px-1 py-0.5"
      >
        🔍
      </button>
    </div>
  );
};

export default SearchInput;
