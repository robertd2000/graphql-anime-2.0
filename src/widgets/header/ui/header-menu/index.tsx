import { Col, Menu, Row } from "antd";
import { itemsList } from "~widgets/header/constants";

export const HeaderMenu = () => {
  return (
    <Col flex={"auto"}>
      <Row justify={"end"} align={"middle"}>
        <Col span={24}>
          <Menu
            theme="dark"
            mode="horizontal"
            items={itemsList}
            selectable={false}
          />
        </Col>
      </Row>
    </Col>
  );
};
