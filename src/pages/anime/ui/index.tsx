import { ConfigProvider, Grid, Layout, theme } from "antd";
import { AnimeHeader } from "~widgets/anime-header/ui";
import { Sidebar } from "~widgets/sidebar";

const { useBreakpoint } = Grid;

export const AnimePage = () => {
  const screens = useBreakpoint();

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          // colorBgBase: "#f5f5f5",
        },
      }}
    >
      <AnimeHeader />
      <Layout
        style={{
          padding: screens.lg ? "2rem 10rem 1.5rem" : "1rem 3rem",
        }}
      >
        <ConfigProvider
          theme={{
            algorithm: theme.defaultAlgorithm,
            token: {
              // colorBgBase: "#f5f5f5",
            },
          }}
        >
          <Sidebar />
          <Layout.Content>Content</Layout.Content>
        </ConfigProvider>
      </Layout>
    </ConfigProvider>
  );
};
