import { Col } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";
import { CardItem } from "~shared/ui/card/card-item";

interface CharacterTitleCardProps {
  title: string;
  id: number;
  image: string;
}

export const CharacterTitleCard: FC<CharacterTitleCardProps> = ({
  id,
  title,
  image,
}) => {
  return (
    <Col lg={{ span: 4 }} md={{ span: 8 }} sm={{ span: 12 }} xs={{ span: 12 }}>
      <Link to={`/anime/${id}`}>
        <CardItem title={title} image={image} size="small" />
      </Link>
    </Col>
  );
};
