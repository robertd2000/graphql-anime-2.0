import { Col } from "antd";
import { FC } from "react";
import { AnimeCard } from "~entities/card/ui/anime-card";
import { CardPopover } from "~entities/card/ui/popover/ui";
import { Media } from "~entities/home/types";
import { CardContent } from "~shared/ui/card/card-content";
import { CardTitle } from "~shared/ui/card/card-title";

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
          studios={data.studios.nodes}
          genres={data.genres}
          episodes={data.episodes as number}
          type={data.type}
        />
      }
    >
      <Col md={{ span: 6 }} sm={{ span: 8 }} xs={{ span: 12 }}>
        <AnimeCard
          title={(data.title.english as string) || data.title.native}
          image={data.coverImage.large}
        />
      </Col>
    </CardPopover>
  );
};
