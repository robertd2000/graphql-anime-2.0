import { Col, Select, Typography } from "antd";

export const YearSelect = () => {
  return (
    <Col span={4}>
      <Typography.Title level={5}>Year</Typography.Title>
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
