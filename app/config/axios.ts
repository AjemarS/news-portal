import axios from "axios";

export const instance = axios.create({
  baseURL: "https://newsapi.org/v2",
  headers: { "X-Api-Key": process.env.NEWS_API_KEY },
});
