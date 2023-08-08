import { Route, Routes } from 'react-router'
import { HomePage } from './home'
import { AnimeList } from './search-anime-list'
import { AnimeMainPage, AnimePage } from './anime'
import { AnimeWatchPage } from './anime/ui/anime-watch'
import { AnimeCharacters } from './anime/ui/anime-characters'
import { AnimeStaff } from './anime/ui/anime-staff'
import { AnimeReviews } from './anime/ui/anime-reviews'
import { AnimeStats } from './anime/ui/anime-stats'
import { AnimeSocial } from './anime/ui/anime-social'

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search-anime" element={<AnimeList />} />
      <Route path="/anime/:id" element={<AnimePage />}>
        <Route path="" element={<AnimeMainPage />} />
        <Route path="watch" element={<AnimeWatchPage />} />
        <Route path="characters" element={<AnimeCharacters />} />
        <Route path="staff" element={<AnimeStaff />} />
        <Route path="reviews" element={<AnimeReviews />} />
        <Route path="stats" element={<AnimeStats />} />
        <Route path="social" element={<AnimeSocial />} />
      </Route>
    </Routes>
  )
}
