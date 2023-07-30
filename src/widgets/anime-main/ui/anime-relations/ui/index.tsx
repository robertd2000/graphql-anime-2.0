import { Row, Typography } from "antd";
import { FC } from "react";
import { RelationsEdge } from "~shared/types/anime";
import { CardMini } from "~shared/ui/card-mini";

interface AnimeRelationsProps {
  data: RelationsEdge[];
}

export const AnimeRelations: FC<AnimeRelationsProps> = ({ data }) => {
  return (
    <>
      <Typography.Title level={5}>Relations</Typography.Title>
      <Row gutter={[16, 16]} align={"middle"} justify="start">
        {data?.map((title) => (
          <CardMini
            data={title.node}
            relationType={title.relationType}
            id={title.id}
            key={title.id}
          />
        ))}
      </Row>
    </>
  );
};
