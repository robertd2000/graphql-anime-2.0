import { FC } from "react";
import { Card, Typography } from "antd";

const { Meta } = Card;

interface CardItemProps {
  image: string;
  title: string;
}

export const CardItem: FC<CardItemProps> = ({ image, title }) => {
  return (
    <Card
      hoverable
      style={{
        maxWidth: 250,
        alignItems: "center",
        margin: "auto",
      }}
      cover={
        <img
          src={image}
          style={{ width: "100%", objectFit: "cover", height: 250 }}
        />
      }
    >
      <Meta
        title={
          <Typography
            style={{
              color: "rgb(116,136,153)",
            }}
          >
            {title}
          </Typography>
        }
      />
    </Card>
  );
};
