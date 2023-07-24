import { Route, Routes } from "react-router";
import { HomePage } from "./home";
import { AnimeList } from "./search-anime-list";
import { TrendingsPage } from "./trendings";
import { PopularPage } from "./popular";
import { SeasonPopularPage } from "./season-popular";
import { TopAnimePage } from "./top-anime";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search-anime" element={<AnimeList />} />
      <Route path="/trendings" element={<TrendingsPage />} />
      <Route path="/season-popular" element={<SeasonPopularPage />} />
      <Route path="/popular" element={<PopularPage />} />
      <Route path="/top-100" element={<TopAnimePage />} />
    </Routes>
  );
};
