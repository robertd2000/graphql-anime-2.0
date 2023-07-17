import { FC } from "react";
import { Typography } from "antd";

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
    <div>
      <Typography.Title
        level={5}
        style={{
          padding: "0 1rem",
          color: "rgb(100, 115, 128)",
        }}
      >
        {season} {year} - {averageScore}
      </Typography.Title>
    </div>
  );
};
