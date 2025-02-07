"use client";
import { ResponseData } from "@/app/types";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface SearchResultsProviderProps {
  children: ReactNode;
}

interface SearchResultsContextValue {
  searchResults: ResponseData | null;
  setSearchResults: (results: ResponseData) => void;
}

const SearchResultsContext = createContext<SearchResultsContextValue | null>(null);

export const SearchResultsProvider: React.FC<SearchResultsProviderProps> = ({ children }) => {
  const [searchResults, setSearchResults] = useState<ResponseData | null>(null);

  return (
    <SearchResultsContext.Provider value={{ searchResults, setSearchResults }}>
      {children}
    </SearchResultsContext.Provider>
  );
};

export const useSearchResults = (): SearchResultsContextValue => {
  const context = useContext(SearchResultsContext);
  if (!context) {
    throw new Error("useSearchResults must be used within a SearchResultsProvider");
  }
  return context;
};
