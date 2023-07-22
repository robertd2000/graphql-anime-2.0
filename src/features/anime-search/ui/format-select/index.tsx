import { Col, Select, Typography } from "antd";

export const FormatSelect = () => {
  return (
    <Col span={4}>
      <Typography.Title level={5}>Format</Typography.Title>
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
