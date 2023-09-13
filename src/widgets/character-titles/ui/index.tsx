import { Col, Row } from "antd";
import { useCharacterTitles } from "../model";
import { CharacterTitleCard } from "./card";
import { LayoutCustom } from "~shared/ui/layout";
import { ListSkeleton } from "~shared/ui/skeleton";

export const CharacterTitles = () => {
  const { data, loading, ref } = useCharacterTitles();

  return (
    <LayoutCustom>
      <Row gutter={[16, 32]} align={"middle"} justify="start">
        {loading ? (
          <ListSkeleton />
        ) : (
          data?.map((title, index) =>
            index === data.length - 1 ? (
              <Col span={24} ref={ref} key={title.id}>
                <CharacterTitleCard
                  key={title.id}
                  title={title.node.title.userPreferred}
                  id={title.node.id}
                  image={title.node.coverImage.large}
                />
              </Col>
            ) : (
              <CharacterTitleCard
                key={title.id}
                title={title.node.title.userPreferred}
                id={title.node.id}
                image={title.node.coverImage.large}
              />
            )
          )
        )}
      </Row>
    </LayoutCustom>
  );
};
