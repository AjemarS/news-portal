import React from "react";
import { instance } from "../../config/axios";

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

export default async function Header({ category }: { category: string }) {
  const response = await instance.get<ResponseData>("/top-headlines/sources");

  const topics = [...new Set(response.data.sources.map((source) => source.category))];
  const topicsStyled = topics.map((topic) => topic.charAt(0).toUpperCase() + topic.slice(1));

  return (
    <header className="sticky top-0 z-10 mb-4 pb-2 bg-gradient-to-b from-gray-900 to-black text-white flex flex-col justify-between items-center">
      <div className="flex flex-row items-center w-full px-4">
        <h1 className="w-1/4 text-4xl my-4">Various News </h1>
        <div className="flex flex-grow justify-center">Search</div>
        <button className="w-1/4">Light</button>
      </div>
      <div className="w-full flex justify-center items-center py-1.5">
        <nav className="w-2/5 flex justify-center items-center">
          {topics.map((topic, index) => (
            <a
              href={`/${topic}`}
              key={index}
              className={
                topic === category
                  ? "mx-2 py-1 px-2 border-b border-white translate-y-1 pb-0.5"
                  : "mx-2 py-1 px-2 rounded-sm border border-transparent transition-all hover:border-b-white hover:translate-y-1 hover:pb-0.5 active:border active:border-white"
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
