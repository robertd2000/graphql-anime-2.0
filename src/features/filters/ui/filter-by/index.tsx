import { Select } from "antd";
import { useFilterBy } from "~features/filters";

export const FilterBy = () => {
  const { filterByOptions, filterBy, onSelect, onClear } = useFilterBy();

  return (
    <Select
      options={filterByOptions}
      defaultValue={filterBy || "POPULARITY_DESC"}
      onChange={onSelect}
      onClear={onClear}
      bordered={false}
      style={{
        width: "100%",
      }}
    />
  );
};
