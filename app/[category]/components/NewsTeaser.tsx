"use client";
import { NewsListItem } from "../../types";

interface NewsListItemProps {
  item: NewsListItem;
}

export default function NewsTeaser({ item }: NewsListItemProps) {
  return (
    <div className="container p-2 mb-5">
      <div>
        <h1 className="text-3xl mb-4 hover:underline">{item.title}</h1>
        <div className="text-gray-600 dark:text-gray-300 mb-6">{item.description}</div>
      </div>
      {item.urlToImage && <img src={item.urlToImage} alt={item.title} />}
    </div>
  );
}
