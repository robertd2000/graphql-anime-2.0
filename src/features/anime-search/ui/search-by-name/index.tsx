import { Col, Input, Typography } from "antd";

export const SearchByName = () => {
  return (
    <Col span={4}>
      <Typography.Title level={5}>Search</Typography.Title>
      <Input.Search
        style={{
          width: "100%",
        }}
      />
    </Col>
  );
};
