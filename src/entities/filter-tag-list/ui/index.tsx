import { FC } from "react";
import { Row, Tag } from "antd";
import { TagsFilled } from "@ant-design/icons";
import { baseColors } from "~shared/constants";

interface FilterTagListProps {
  tags: {
    id: string;
    name: string;
  }[];
  onClear: (tag: string) => void;
  onClearAll: () => void;
}

export const FilterTagList: FC<FilterTagListProps> = ({
  tags,
  onClear,
  onClearAll,
}) => {
  return (
    <Row align={"middle"}>
      <TagsFilled
        style={{
          marginRight: "1rem",
          fontSize: "1.3rem",
          color: baseColors.grey,
        }}
      />
      {tags.map(({ name, id }) => (
        <Tag
          key={id}
          closable
          color={baseColors.blue}
          onClose={() => onClear(id)}
        >
          {name}
        </Tag>
      ))}
      {tags.length > 1 ? (
        <Tag closable color={baseColors.lightBlue} onClose={onClearAll}>
          Clear All
        </Tag>
      ) : null}
    </Row>
  );
};
