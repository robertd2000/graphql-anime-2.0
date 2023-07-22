import { Row } from "antd";
import {
  FormatSelect,
  GenreSelect,
  SearchByName,
  SeasonSelect,
  YearSelect,
} from "~features/anime-search";

export const AnimeSearch = () => {
  return (
    <Row justify={"space-between"}>
      <SearchByName />
      <GenreSelect />
      <YearSelect />
      <SeasonSelect />
      <FormatSelect />
    </Row>
  );
};
