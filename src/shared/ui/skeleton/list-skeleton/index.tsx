import { Card, Col, Row, Skeleton } from "antd";

export const ListSkeleton = () => {
  return (
    <>
      <Row
        gutter={[16, 32]}
        align={"middle"}
        justify="start"
        style={{
          marginTop: "2rem",
        }}
      >
        {[...Array(24).keys()]?.map((i) => (
          <Col
            lg={{ span: 4 }}
            md={{ span: 8 }}
            sm={{ span: 12 }}
            xs={{ span: 12 }}
            key={i}
          >
            <Card
              cover={
                <Skeleton.Image
                  active
                  style={{ width: "100%", objectFit: "cover", height: 250 }}
                />
              }
            >
              <Skeleton
                active
                style={{
                  height: "50%",
                }}
              />
            </Card>
          </Col>
        ))}

        <Col span={24}>
          <Skeleton active />
        </Col>
      </Row>
    </>
  );
};
