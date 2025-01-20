"use client";
import { NewsListItem } from "../../types";

interface NewsListItemProps {
  item: NewsListItem;
}

export default function NewsTeaser({ item }: NewsListItemProps) {
  return (
    <div className="container p-2 mb-5">
      <h1 className="text-3xl mb-4 hover:underline">{item.title}</h1>
      <div className="text-gray-300">{item.description}</div>
    </div>
  );
}
