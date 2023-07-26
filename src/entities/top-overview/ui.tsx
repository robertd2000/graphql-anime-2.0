import { FC } from "react";
import { Row } from "antd";
import { TopOverviewList } from "./top-overview-list/top-overview-list";
import { OverviewTitle } from "~entities/overview/ui/overview-title/overview-title";
import { Media } from "~shared/types";

interface TopOverviewProps {
  data: Media[];
}
export const TopOverview: FC<TopOverviewProps> = ({ data }) => {
  return (
    <>
      <Row>
        <OverviewTitle title={"TOP 100 ANIME"} params={"&sort=SCORE_DESC"} />
      </Row>
      <TopOverviewList data={data} />
    </>
  );
};
