import { Col, Row, Skeleton } from "antd";
import { LayoutCustom } from "~shared/ui/layout";

export const AnimeDetailsSkeleton = () => {
  return (
    <Row>
      <Skeleton.Image
        active
        style={{
          width: "100vw",
          height: "50vh",
        }}
      ></Skeleton.Image>
      <Col span={24}>
        <LayoutCustom>
          <Row>
            <Col span={6}>
              <Skeleton.Image
                active
                style={{
                  width: 210,
                  height: 290,
                  marginTop: "-8rem",
                }}
              />
            </Col>
            <Col span={18}>
              <Skeleton active />
              <Skeleton active />
            </Col>
          </Row>
        </LayoutCustom>
      </Col>
    </Row>
  );
};
