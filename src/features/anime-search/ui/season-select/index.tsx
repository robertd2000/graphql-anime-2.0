import { Col, Select, Typography } from "antd";

export const SeasonSelect = () => {
  return (
    <Col span={4}>
      <Typography.Title level={5}>Season</Typography.Title>
      <Select
        mode="multiple"
        allowClear
        placeholder="Any"
        style={{
          width: "100%",
        }}
      />
    </Col>
  );
};
