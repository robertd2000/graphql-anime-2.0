import { Col, List, Row, Skeleton } from "antd";
import Sider from "antd/es/layout/Sider";

export const AnimeSideBarSkeleton = () => {
  return (
    <Sider
      theme="light"
      width={250}
      style={{
        backgroundColor: "rgb(245, 245, 245)",
      }}
    >
      <div>
        {[1, 2].map((i) => (
          <Row
            key={i}
            style={{
              backgroundColor: "white",
              margin: "10px 0px",
              padding: "5px 25px",
            }}
          >
            <Col span={4}>
              <Skeleton.Image
                active
                style={{ width: 13, objectFit: "cover", height: 13 }}
              />
            </Col>

            <Col span={20}>
              <Skeleton.Input active />
            </Col>
          </Row>
        ))}
      </div>

      <List
        dataSource={[...Array(24).keys()] || []}
        split={false}
        renderItem={(i) => (
          <List.Item
            key={i}
            style={{
              margin: "0 10px",
              padding: "0px 15px",
            }}
          >
            <List.Item.Meta
              title={<Skeleton active />}
              description={<Skeleton active />}
            />
          </List.Item>
        )}
        style={{
          backgroundColor: "white",
        }}
      />
    </Sider>
  );
};
