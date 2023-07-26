import { Col, Select, Typography } from "antd";
import { useFormat } from "~features/filters/model";

export const FormatSelect = () => {
  const { formatOptions, currentFormats, onClear, onChange } = useFormat();

  return (
    <Col span={4}>
      <Typography.Title level={5}>Format</Typography.Title>
      <Select
        mode="tags"
        allowClear
        options={formatOptions || []}
        defaultValue={currentFormats}
        onChange={(e) => onChange(e!)}
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
