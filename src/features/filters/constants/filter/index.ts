import { SelectProps } from "antd";

export const filterByOptions: SelectProps["options"] = [
  { value: "TITLE_ROMAJI", label: "Title" },
  { value: "POPULARITY_DESC", label: "Popularity" },
  { value: "SCORE_DESC", label: "Average Score" },
  { value: "TRENDING_DESC", label: "Trending" },
  { value: "FAVOURITES_DESC", label: "Favorites" },
  { value: "ID_DESC", label: "Date Added" },
  { value: "START_DATE_DESC", label: "Release Date" },
];

export const ommitedParamsForTags = filterByOptions.map(({ value }) => value);
