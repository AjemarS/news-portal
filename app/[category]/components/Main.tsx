import React from "react";
import { Article, ResponseData } from "../../types";
import { instance } from "../../config/axios";
import NewsTeaser from "./NewsTeaser";
import Link from "next/link";

export default async function Main({ category }: { category: string }) {
  const response = await instance.get<ResponseData>("/top-headlines", {
    params: { category: category },
  });

  return (
    <div className="flex flex-col items-center">
      {response.data.status === "ok" ? (
        response.data.articles.map((article: Article, index: number) => (
          <Link href={`/${category}/article/${index}`} key={index} className="flex w-1/2">
            {article.title !== "[Removed]" && <NewsTeaser key={index} item={article} />}
          </Link>
        ))
      ) : (
        <div>Nothings happened! ^^</div>
      )}
    </div>
  );
}
