"use server";

export async function getSearchResults(q: string) {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${q}&apiKey=${process.env.NEWS_API_KEY}`
  );

  return response.json();
}

export async function getTopHeadlines(category: string) {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${process.env.NEWS_API_KEY}`
  );

  return response.json();
}

export async function getSources() {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines/sources?apiKey=${process.env.NEWS_API_KEY}`
  );

  return response.json();
}
