import { Col, Select, Typography } from "antd";
import { useSeason } from "~features/anime-search/model";

export const SeasonSelect = () => {
  const { seasonsOptions, yearLocation, onSelect, onClear } = useSeason();

  return (
    <Col span={4}>
      <Typography.Title level={5}>Season</Typography.Title>
      <Select
        allowClear
        placeholder="Any"
        options={seasonsOptions}
        defaultValue={yearLocation}
        onSelect={onSelect}
        onClear={onClear}
        style={{
          width: "100%",
        }}
      />
    </Col>
  );
};
