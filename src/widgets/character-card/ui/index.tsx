import { useParams } from "react-router";
import { getCharacterCard } from "../api";
import { Col, Row, Image, Typography } from "antd";
import { LayoutCustom } from "~shared/ui/layout";
import { AnimeDetailsSkeleton } from "~shared/ui/skeleton";

export const CharacterCard = () => {
  const { id } = useParams();
  const { data, loading } = getCharacterCard(+id!);

  return loading ? (
    <AnimeDetailsSkeleton />
  ) : (
    <Row>
      <Col
        span={24}
        style={{
          width: "100vw",
          height: "10vh",
          backgroundSize: "cover",
          backgroundPosition: "50% 35%",
          background:
            "linear-gradient(180deg,rgba(var(--color-shadow-dark),0) 40%,rgba(var(--color-shadow-dark),.6))",
        }}
      ></Col>
      <Col span={24}>
        <LayoutCustom backgroundColor="white">
          <Row>
            <Col span={6}>
              <Image
                src={data?.image.large}
                width={210}
                preview={false}
                style={{
                  boxShadow: "1px grey",
                }}
              />
            </Col>
            <Col span={18}>
              <Typography.Title level={4}>{data?.name.full}</Typography.Title>
              <div
                dangerouslySetInnerHTML={{
                  __html: data?.description as string,
                }}
              ></div>
            </Col>
          </Row>
        </LayoutCustom>
      </Col>
    </Row>
  );
};
