import { Row } from "antd";
import {
  FormatSelect,
  GenreSelect,
  SearchByName,
  SeasonSelect,
  YearSelect,
} from "~features/filters";

export const MainFilters = () => {
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
