import { FC } from "react";
import { Col } from "antd";
import { CardTitle } from "~shared/ui/card/card-title";
import { CardContent } from "~shared/ui/card/card-content";
import { CardItem } from "./card-item";
import { CardPopover } from "./card-popover";
import { Media } from "~shared/types";
import { Link } from "react-router-dom";

interface CardProps {
  data: Media;
}

export const Card: FC<CardProps> = ({ data }) => {
  return (
    <CardPopover
      title={
        <CardTitle
          averageScore={data?.averageScore || 0}
          season={data.season}
          year={data.seasonYear}
        />
      }
      content={
        <CardContent
          studios={data.studios}
          genres={data.genres}
          episodes={data.episodes as number}
          type={data.type}
        />
      }
    >
      <Col
        lg={{ span: 4 }}
        md={{ span: 8 }}
        sm={{ span: 12 }}
        xs={{ span: 12 }}
      >
        <Link to={`/anime/${data.id}`}>
          <CardItem
            title={
              (data.title.userPreferred as string) ||
              data.title.english ||
              data.title.native
            }
            image={data.coverImage.large}
          />
        </Link>
      </Col>
    </CardPopover>
  );
};
