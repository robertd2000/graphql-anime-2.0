import { Route, Routes } from "react-router";
import { HomePage } from "./home";
import { AnimeList } from "./search-anime-list";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search-anime" element={<AnimeList />} />
    </Routes>
  );
};
