import { Card } from "antd";
import { FC } from "react";

const { Meta } = Card;

interface AnimeCardProps {
  image: string;
  title: string;
}
export const AnimeCard: FC<AnimeCardProps> = ({ title, image }) => {
  return (
    <Card
      hoverable
      style={{
        maxWidth: 240,
        alignItems: "center",
        margin: "auto",
      }}
      cover={
        <img
          src={image}
          style={{ width: "100%", objectFit: "cover", height: 350 }}
        />
      }
    >
      <Meta title={title} />
    </Card>
  );
};
