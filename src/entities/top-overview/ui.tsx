import { FC } from "react";
import { Medum } from "~entities/home/types";
import { TopOverviewList } from "./top-overview-list/top-overview-list";
import { Row } from "antd";
import { OverviewTitle } from "~entities/overview/ui/overview-title/overview-title";

interface TopOverviewProps {
  data: Medum[];
}
export const TopOverview: FC<TopOverviewProps> = ({ data }) => {
  return (
    <>
      <Row>
        <OverviewTitle title={"TOP 100 ANIME"} href={"/top-100"} />
      </Row>
      <TopOverviewList data={data} />
    </>
  );
};
