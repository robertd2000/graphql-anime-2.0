import { Col, Row } from "antd";
import { FilterTagList } from "~entities/filter-tag-list";
import { useTags } from "~features/filters";
import { FilterBy } from "~features/filters/ui/filter-by";

export const SecondaryFilters = () => {
  const { tags, onClearAll, onClear } = useTags();

  return tags.length ? (
    <Row
      style={{
        marginTop: "1rem",
      }}
    >
      <Col span={21}>
        <FilterTagList tags={tags} onClear={onClear} onClearAll={onClearAll} />
      </Col>
      <Col span={3}>
        <FilterBy />
      </Col>
    </Row>
  ) : null;
};
