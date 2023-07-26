import { Route, Routes } from "react-router";
import { HomePage } from "./home";
import { AnimeList } from "./search-anime-list";
import { AnimePage } from "./anime";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search-anime" element={<AnimeList />} />
      <Route path="/anime/:id" element={<AnimePage />} />
    </Routes>
  );
};
