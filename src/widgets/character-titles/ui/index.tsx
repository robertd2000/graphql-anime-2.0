import { Row } from "antd";
import { useCharacterTitles } from "../model";
import { CharacterTitleCard } from "./card";
import { LayoutCustom } from "~shared/ui/layout";

export const CharacterTitles = () => {
  const { data, loading } = useCharacterTitles();

  return (
    <LayoutCustom>
      <Row gutter={[16, 32]} align={"middle"} justify="start">
        {data?.edges.map((title) => (
          <CharacterTitleCard
            key={title.id}
            title={title.node.title.userPreferred}
            id={title.node.id}
            image={title.node.coverImage.large}
          />
        ))}
      </Row>
    </LayoutCustom>
  );
};
