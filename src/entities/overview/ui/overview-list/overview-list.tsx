import { FC } from "react";
import { Row } from "antd";
import { Card } from "~shared/ui/card";
import { Medum } from "~entities/home/types";
import { OverviewListProps } from "./overview-list.inteface";

export const OverviewList: FC<OverviewListProps> = ({ data }) => {
  return (
    <Row gutter={[16, 32]} align={"middle"} justify="space-evenly">
      {data?.map((title) => (
        <Card data={title as Medum} key={title.id} />
      ))}
    </Row>
  );
};
