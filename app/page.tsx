import { redirect } from "next/navigation";
import { getSources } from "./[category]/actions";


export default async function Home() {
  // Prevented from changing the topics from API and broke all routes

  const response = await getSources();
  const sources = response.sources;

  if (!sources.length) {
    return <p>No available topics</p>;
  }

  const uniqueThemes = [
    ...new Set(sources.map((source: { category: string }) => source.category.toLowerCase())),
  ];

  redirect(`/${uniqueThemes[0]}`);
}
