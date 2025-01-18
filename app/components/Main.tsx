import React from "react";
import { Article } from "../types";
import { instance } from "../config/axios";

interface ResponseData {
  status: string;
  totalResults: number;
  articles: [];
}

export default async function Main() {
  const response = await instance.get<ResponseData>("/top-headlines", {
    params: { category: "general" },
  });

  return (
    <div>
      {response.data.articles.map((article: Article, index: number) => (
        <article key={index}>
          <h1>{article.title}</h1>
          <div>{article.description}</div>
        </article>
      ))}
    </div>
  );
}
