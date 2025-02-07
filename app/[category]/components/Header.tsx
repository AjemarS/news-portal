"use client";

import React, { useEffect, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import SearchInput from "./SearchInput";
import { getSources } from "../actions";

interface ResponseData {
  status: string;
  sources: {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
  }[];
}

export default function Header({ category }: { category: string }) {
  const [results, setResults] = useState<ResponseData | null>(null);
  const [topics, setTopics] = useState<string[]>([]);

  useEffect(() => {
    async function loadSources() {
      const results = await getSources();
      setResults(results);
    }
    loadSources();
  }, []);

  useEffect(() => {
    if (results) {
      const uniqueTopics = [...new Set(results.sources.map((source) => source.category))];
      setTopics(uniqueTopics);
    }
  }, [results]);

  const topicsStyled = topics.map((topic) => topic.charAt(0).toUpperCase() + topic.slice(1));

  return (
    <header className="sticky top-0 z-10 mb-4 pb-2  bg-gray-200 dark:bg-zinc-950 dark:text-white flex flex-col justify-between items-center">
      <div className="flex flex-row items-center w-full px-4 border-b-2 border-gray-300 dark:border-zinc-800">
        <h1 className="w-1/4 text-4xl my-4">Various News </h1>
        <div className="flex flex-grow justify-center">
          <SearchInput />
        </div>
        <div className="w-1/4 flex justify-center">
          <ThemeSwitcher />
        </div>
      </div>
      <div className="w-full flex justify-center items-center py-1.5">
        <nav className="w-2/5 flex justify-center items-center">
          {topics.map((topic, index) => (
            <a
              href={`/${topic}`}
              key={index}
              className={
                topic === category
                  ? "mx-2 py-1 px-2 border-b border-black dark:border-white translate-y-1 pb-0.5"
                  : "mx-2 py-1 px-2 rounded-sm border border-transparent transition-all hover:border-b-black hover:dark:border-b-white hover:translate-y-1 hover:pb-0.5 active:border active:border-black dark:active:border-white"
              }
            >
              {topicsStyled[index]}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
