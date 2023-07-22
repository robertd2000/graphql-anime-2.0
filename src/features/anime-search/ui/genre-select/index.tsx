import { Col, Select, Typography } from "antd";
import { useGenreCollection } from "~features/anime-search/model";

export const GenreSelect = () => {
  const { genreCollectionOptions, loading, onSelect } = useGenreCollection();

  return (
    <Col span={4}>
      <Typography.Title level={5}>Genres</Typography.Title>
      <Select
        mode="multiple"
        allowClear
        options={genreCollectionOptions}
        loading={loading}
        onSelect={onSelect}
        placeholder="Any"
        style={{
          width: "100%",
        }}
      />
    </Col>
  );
};