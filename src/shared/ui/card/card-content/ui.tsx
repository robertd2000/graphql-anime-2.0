import { Col, Row, Tag, Typography } from "antd";
import { FC } from "react";

interface CardContentProps {
  studios: {
    name: string;
  }[];
  genres: string[];
  episodes: number;
  type: string;
}

export const CardContent: FC<CardContentProps> = ({
  studios,
  genres,
  episodes,
  type,
}) => {
  return (
    <Row
      style={{
        padding: "1rem",
        maxWidth: "240px",
        fontSize: "0.8rem",
      }}
    >
      <Col span={24}>
        {studios.map(({ name }) => (
          <Typography
            style={{
              color: "rgb(138, 44, 15)",
              fontWeight: "bold",
            }}
            color="rgb(138, 44, 15)"
          >
            {name}
          </Typography>
        ))}
      </Col>

      <Col
        span={24}
        style={{
          marginTop: "0.7rem",
          marginBottom: "2rem",
        }}
      >
        {type} • {episodes} episodes
      </Col>

      <Col span={24}>
        {genres.map((genre) => (
          <Tag
            color="#2db7f5"
            style={{
              margin: "0.2rem 0.3rem",
            }}
          >
            {genre}
          </Tag>
        ))}
      </Col>
    </Row>
  );
};
