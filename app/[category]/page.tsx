"use client";

import { ThemeProvider } from "next-themes";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { SearchResultsProvider } from "./components/SearchResultsProvider";
import { usePathname } from "next/navigation";

export default function Home() {
  const category = usePathname().split("/")[1];

  return (
    <ThemeProvider attribute="class">
      <div>
        <SearchResultsProvider>
          <Header category={category} />
            <Main category={category} />
        </SearchResultsProvider>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
