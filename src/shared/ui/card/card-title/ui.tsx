import { FC } from "react";
import { Col, Row, Typography } from "antd";
import { getRating } from "~entities/card/lib";

interface CardTitleProps {
  season: string;
  year: number;
  averageScore: number;
}

export const CardTitle: FC<CardTitleProps> = ({
  season,
  year,
  averageScore,
}) => {
  return (
    <Typography.Title
      level={5}
      style={{
        margin: "0",
        padding: "0 0.5rem",
        color: "rgb(100, 115, 128)",
        fontSize: "1.2rem",
      }}
    >
      <Row justify={"end"} align={"middle"}>
        <Col flex={"160px"}>
          {season} {year}
        </Col>
        <Col flex={"auto"}>{getRating(averageScore)}</Col>
      </Row>
    </Typography.Title>
  );
};
