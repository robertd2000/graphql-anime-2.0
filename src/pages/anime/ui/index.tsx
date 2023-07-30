import { Outlet } from "react-router";
import { ConfigProvider, Grid, Layout, theme } from "antd";
import { AnimeHeader } from "~widgets/anime-header/ui";
import { Sidebar } from "~widgets/sidebar";
import { AnimeMenu } from "~entities/anime/menu";

const { useBreakpoint } = Grid;

export const AnimePage = () => {
  const screens = useBreakpoint();

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
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
          }}
        >
          <Sidebar />
          <Layout.Content>
            <AnimeMenu />
            <Outlet />
          </Layout.Content>
        </ConfigProvider>
      </Layout>
    </ConfigProvider>
  );
};
