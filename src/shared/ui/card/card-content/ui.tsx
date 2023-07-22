import { FC } from "react";
import { Col, Row, Tag, Typography } from "antd";
import { Studios } from "~entities/anime-card-list/types";

interface CardContentProps {
  studios: Studios;
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
        padding: "0.5rem",
        maxWidth: "240px",
        fontSize: "0.8rem",
      }}
    >
      <Col span={24}>
        {studios.edges.slice(0, 3).map(({ node: { name } }) => (
          <Typography
            key={name}
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
            key={genre}
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
