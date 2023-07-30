import { Route, Routes } from "react-router";
import { HomePage } from "./home";
import { AnimeList } from "./search-anime-list";
import { AnimeMainPage, AnimePage } from "./anime";
import { AnimeWatchPage } from "./anime/ui/anime-watch";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search-anime" element={<AnimeList />} />
      <Route path="/anime/:id" element={<AnimePage />}>
        <Route path="" element={<AnimeMainPage />} />
        <Route path="watch" element={<AnimeWatchPage />} />
      </Route>
    </Routes>
  );
};
