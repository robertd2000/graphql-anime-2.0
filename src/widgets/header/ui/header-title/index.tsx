import { Link } from "react-router-dom";
import { Col, ConfigProvider, Typography, theme } from "antd";

export const HeaderTitle = () => {
  return (
    <Col flex={100}>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
        }}
      >
        <Link to={"/"}>
          <Typography.Title
            level={5}
            style={{
              verticalAlign: "center",
              margin: "auto",
            }}
          >
            Anime App
          </Typography.Title>
        </Link>
      </ConfigProvider>
    </Col>
  );
};
