import { Col, Input, Typography } from "antd";
import { useSearchByName } from "~features/filters/model";

export const SearchByName = () => {
  const { onInput, searchLocation } = useSearchByName();

  return (
    <Col span={6}>
      <Typography.Title level={5}>Search</Typography.Title>
      <Input.Search
        defaultValue={searchLocation}
        onChange={(e) => onInput(e.target.value)}
        style={{
          width: "100%",
        }}
      />
    </Col>
  );
};
