"use client";

import React, { useEffect, useState } from "react";
import { Article, ResponseData } from "../../types";
import NewsTeaser from "./NewsTeaser";
import Link from "next/link";
import { useSearchResults } from "./SearchResultsProvider";
import { getTopHeadlines } from "../actions";

export default function Main({ category }: { category: string }) {
  const [results, setResults] = useState<ResponseData | null>(null);

  useEffect(() => {
    async function loadHeadlines() {
      const results = await getTopHeadlines(category);
      setResults(results);
    }
    loadHeadlines();
  }, []);

  const searchResults = useSearchResults().searchResults;

  return (
    <div className="flex flex-col items-center">
      {searchResults ? (
          searchResults.articles.map((article: Article, index: number) => (
            <Link href={article.url} key={index} className="flex w-1/2">
              {article.title !== "[Removed]" && <NewsTeaser key={index} item={article} />}
            </Link>
          ))
      ) : (
        results &&
        results.articles.map((article: Article, index: number) => (
          <Link href={article.url} key={index} className="flex w-1/2">
            {article.title !== "[Removed]" && <NewsTeaser key={index} item={article} />}
          </Link>
        ))
      )}
    </div>
  );
}
