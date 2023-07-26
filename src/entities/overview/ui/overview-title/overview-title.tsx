import { FC } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Typography } from "antd";
import { OverviewTitleProps } from "./overview-title.interface";

export const OverviewTitle: FC<OverviewTitleProps> = ({ title, params }) => {
  const href = `/search-anime?${params}`;

  return (
    <Col span={24}>
      <Row align={"middle"} justify={"space-between"}>
        <Link to={href}>
          <Typography.Title level={5}>{title}</Typography.Title>
        </Link>
        <Link to={href}>View all</Link>
      </Row>
    </Col>
  );
};
