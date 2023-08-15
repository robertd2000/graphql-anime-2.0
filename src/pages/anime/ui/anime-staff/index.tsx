import { Col, Row } from "antd";
import { useAnimeStaff } from "~pages/anime/model";
import { CardRole } from "~shared/ui/card-role";
import { ListMiniSkeleton } from "~shared/ui/skeleton";

export const AnimeStaff = () => {
  const { data, loading, ref } = useAnimeStaff();

  return loading ? (
    <ListMiniSkeleton dataLength={data?.length || 24} />
  ) : (
    <Row
      gutter={[16, 32]}
      align={"middle"}
      justify="start"
      style={{
        margin: "3rem 1rem",
        marginTop: "3rem",
      }}
    >
      {data?.map((title, index) =>
        index === data.length - 1 ? (
          <Col span={24} ref={ref} key={title.id}>
            <CardRole
              left={{
                description: "",
                id: title.node.id,
                title: title.node.name.userPreferred || "",
                image: title.node.image.large || "",
              }}
            />
          </Col>
        ) : (
          <CardRole
            // ref={index === data.length - 1 ? ref : null}
            key={title.id}
            left={{
              description: "",
              id: title.node.id,
              title: title.node.name.userPreferred || "",
              image: title.node.image.large || "",
            }}
          />
        )
      )}
    </Row>
  );
};
