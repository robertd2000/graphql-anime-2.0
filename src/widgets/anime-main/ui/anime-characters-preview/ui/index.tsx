import { Row, Typography } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";
import { CharacterPreviewEdge } from "~shared/types/anime";
import { CardRole } from "~shared/ui/card-role";

interface AnimeCharactersPreviewProps {
  data: CharacterPreviewEdge[];
}

export const AnimeCharactersPreview: FC<AnimeCharactersPreviewProps> = ({
  data,
}) => {
  return (
    <>
      <Link to={"characters"}>
        <Typography.Title level={5}>Characters</Typography.Title>
      </Link>
      <Row gutter={[32, 32]} align={"middle"} justify="start">
        {data?.map((title) => (
          <CardRole
            left={{
              description: "",
              id: title.node.id,
              title: title.node.name.userPreferred || "",
              image: title.node.image.large || "",
            }}
            right={{
              description: "",
              id: title.voiceActors?.[0].id,
              title: title.voiceActors?.[0].name.userPreferred || "",
              image: title.voiceActors?.[0].image.large || "",
            }}
          />
        ))}
      </Row>
    </>
  );
};
