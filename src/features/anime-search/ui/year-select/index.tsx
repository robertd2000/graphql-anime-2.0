import { Col, Select, Typography } from "antd";
import { useYear } from "~features/anime-search/model";

export const YearSelect = () => {
  const { yearOptions, onSelect, yearLocation, onClear } = useYear();

  return (
    <Col span={4}>
      <Typography.Title level={5}>Year</Typography.Title>
      <Select
        placeholder="Any"
        options={yearOptions}
        onSelect={onSelect}
        onClear={onClear}
        allowClear
        defaultValue={yearLocation}
        style={{
          width: "100%",
        }}
      />
    </Col>
  );
};
