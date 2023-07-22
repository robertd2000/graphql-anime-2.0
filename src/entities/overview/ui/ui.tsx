import { FC } from "react";
import { Row } from "antd";
import { OverviewTitle } from "./overview-title/overview-title";
import { OverviewList } from "./overview-list/overview-list";
import { Medum } from "~entities/home/types";

interface OverviewProps {
  title: string;
  href: string;
  data: Medum[];
}

export const Overview: FC<OverviewProps> = ({ data, href, title }) => {
  return data?.length ? (
    <Row
      align={"middle"}
      style={{
        marginBottom: "2.5rem",
      }}
    >
      <OverviewTitle title={title} href={href} />
      <OverviewList data={data} />
    </Row>
  ) : null;
};
