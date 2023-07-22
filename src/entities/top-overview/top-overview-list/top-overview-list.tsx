import { FC } from "react";
import { Col, List, Row } from "antd";
import { TopOverviewTitle } from "./top-overview-title/top-overview-title";
import { TopOverviewListProps } from "./top-overview-list.interface";
import { convertSeconds, getRating } from "~shared/lib";

export const TopOverviewList: FC<TopOverviewListProps> = ({ data }) => {
  return (
    <List
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item>
          <Col span={14}>
            <TopOverviewTitle item={item} index={index} />
          </Col>

          <Col span={10}>
            <Row justify={"end"}>
              <Col span={8}>
                <List.Item.Meta
                  title={getRating(item.averageScore)}
                  description={`${item.popularity} users`}
                />
              </Col>
              <Col span={8}>
                <List.Item.Meta
                  title={item.format}
                  description={
                    item.format === "TV"
                      ? `${item.episodes} episodes`
                      : convertSeconds(item.duration)
                  }
                />
              </Col>
              <Col span={8}>
                <List.Item.Meta
                  title={`${item.season} ${item.seasonYear}`}
                  description={item.status}
                />
              </Col>
            </Row>
          </Col>
        </List.Item>
      )}
    />
  );
};
