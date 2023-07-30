import { ConfigProvider, Layout, theme } from "antd";
import { useAnimeInfo } from "../model";
import { transformInfo } from "../lib/transformInfo";
import {
  AnimeInfo,
  AnimeTags,
  AnimeRankings,
  AnimeLinks,
} from "~entities/anime";
import { AnimeSideBarSkeleton } from "~shared/ui/skeleton/anime-sidebar-skeleton";

const { Sider } = Layout;

export const Sidebar = () => {
  const { data, loading } = useAnimeInfo();

  const infoList = transformInfo(data);

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorBgBase: "#f5f5f5",
        },
      }}
    >
      {loading ? (
        <AnimeSideBarSkeleton />
      ) : (
        <Sider
          theme="light"
          width={250}
          style={{
            backgroundColor: "rgb(245, 245, 245)",
          }}
        >
          <AnimeRankings rankings={data?.rankings.slice(0, 2) || []} />
          <AnimeInfo info={infoList} />
          <AnimeTags tags={data?.tags || []} />
          <AnimeLinks externalLinks={data?.externalLinks || []} />
        </Sider>
      )}
    </ConfigProvider>
  );
};
