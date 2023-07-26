import { Col, Select, Typography } from "antd";
import { useGenreCollection } from "~features/filters/model";

export const GenreSelect = () => {
  const { genreCollectionOptions, loading, onChange, currentTags, onClear } =
    useGenreCollection();

  return (
    <Col span={4}>
      <Typography.Title level={5}>Genres</Typography.Title>
      <Select
        mode="tags"
        allowClear
        options={genreCollectionOptions || []}
        defaultValue={currentTags}
        loading={loading}
        // onSelect={(e) => onSelect(e!)}
        onChange={(e) => onChange(e)}
        onClear={onClear}
        placeholder="Any"
        maxTagCount={"responsive"}
        style={{
          width: "100%",
        }}
      />
    </Col>
  );
};
