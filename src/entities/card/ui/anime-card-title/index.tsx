import { FC } from "react";
import { AnimeCardTitleProps } from "./index.interface";
import { Typography } from "antd";

export const AnimeCardTitle: FC<AnimeCardTitleProps> = ({ title }) => {
  return (
    <Typography
      style={{
        color: "rgb(116,136,153)",
      }}
    >
      {title}
    </Typography>
  );
};
