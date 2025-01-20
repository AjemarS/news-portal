import React from "react";
import { instance } from "../config/axios";

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

export default async function Header() {
  const response = await instance.get<ResponseData>("/top-headlines/sources");

  const topics = [...new Set(response.data.sources.map((source) => source.category))];
  const topicsStyled = topics.map((topic) => topic.charAt(0).toUpperCase() + topic.slice(1));

  return (
    <header className="sticky top-0 z-10 mb-3 bg-gray-900 text-white flex flex-col justify-between items-center">
      <h1 className="text-4xl my-4">Various News </h1>
      <div className="w-full bg-black flex justify-center items-center py-1.5">
        <nav className="w-2/5 flex justify-between">
          {topics.map((topic, index) => (
            <a
              href={`/${topic}`}
              key={index}
              className="hover:bg-slate-900 py-1 px-2 rounded-md transition-all"
            >
              {topicsStyled[index]}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
