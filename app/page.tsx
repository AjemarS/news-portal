import { redirect } from "next/navigation";
import { instance } from "./config/axios";

export default async function Home() {
  // Prevented from changing the topics from API and broke all routes

  const response = await instance.get("/top-headlines/sources");
  const sources = response.data.sources;

  if (!sources.length) {
    return <p>No available topics</p>;
  }

  const uniqueThemes = [...new Set(sources.map((source: any) => source.category.toLowerCase()))];

  redirect(`/${uniqueThemes[0]}`);
}
