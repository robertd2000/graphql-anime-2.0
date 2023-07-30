import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { AnimeMedia } from "../types";

export const transformInfo = (
  data: AnimeMedia | undefined
): {
  title: string;
  data: string | string[] | ReactNode | ReactNode[];
}[] => {
  return data
    ? [
        {
          title: "Airing",
          data: data.nextAiringEpisode
            ? `Ep. ${data.nextAiringEpisode?.episode} `
            : "",
        },
        {
          title: "Format",
          data: data.format,
        },
        {
          title: "Episode Duration",
          data: `${data.duration} mins`,
        },
        {
          title: "Status",
          data: data.status,
        },
        {
          title: "Start Date",
          data: `${data.startDate.day} ${data.startDate.month} ${data.startDate.year}`,
        },
        {
          title: "End Date",
          data: data.endDate.year
            ? `${data.endDate.day} ${data.endDate.month} ${data.endDate.year}`
            : "",
        },
        {
          title: "Season",
          data: `${data.season} ${data.seasonYear}`,
        },
        {
          title: "Average Score",
          data: `${data.averageScore}%`,
        },
        {
          title: "Mean Score",
          data: `${data.meanScore}%`,
        },
        {
          title: "Popularity",
          data: data.popularity,
        },
        {
          title: "Favorites",
          data: data.favourites,
        },
        {
          title: "Studios",
          data: data.studios.edges
            .filter((studio) => studio.isMain)
            .map((studio) => (
              <Link
                to={`/studio/${studio.node.id}`}
                style={{
                  color: "rgb(146, 153, 161)",
                }}
              >
                {studio.node.name}
              </Link>
            )),
        },
        {
          title: "Producers",
          data: data.studios.edges
            .filter((studio) => !studio.isMain)
            .map((studio) => (
              <Link
                to={`/studio/${studio.node.id}`}
                style={{
                  color: "rgb(146, 153, 161)",
                }}
              >
                {studio.node.name}
              </Link>
            )),
        },
        {
          title: "Source",
          data: data.source,
        },
        {
          title: "Hashtag",
          data: data.hashtag,
        },
        {
          title: "Genres",
          data: data.genres.map((genre) => (
            <p>
              <Link
                to={`/search-anime/?genres=${genre}`}
                style={{
                  color: "rgb(146, 153, 161)",
                }}
              >
                {genre}
              </Link>
            </p>
          )),
        },
        {
          title: "Romaji",
          data: data.title.romaji,
        },
        {
          title: "English",
          data: data.title.english,
        },
        {
          title: "Native",
          data: data.title.native,
        },
        {
          title: "Synonyms",
          data: data.synonyms.map((synonym) => <p>{synonym}</p>),
        },
      ]
    : [];
};
