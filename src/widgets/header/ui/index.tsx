import { Layout, Row } from "antd";
import { HeaderMenu } from "./header-menu";
import { HeaderTitle } from "./header-title";

export const Header = () => {
  return (
    <Layout.Header style={{ display: "flex", alignItems: "center" }}>
      <Row
        style={{
          width: "100%",
        }}
        align={"middle"}
      >
        <HeaderTitle />
        <HeaderMenu />
      </Row>
    </Layout.Header>
  );
};
