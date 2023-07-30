import { useAnimeMain } from "../model";
import { Layout } from "antd";
import { Spinner } from "~shared/ui";
import { AnimeRelations } from "./anime-relations";
import { AnimeCharactersPreview } from "./anime-characters-preview";
import { AnimeStaffPreview } from "./anime-staff-preview";

export const AnimeMain = () => {
  const { data, loading } = useAnimeMain();

  return loading ? (
    <Spinner isLoading={loading} />
  ) : (
    <Layout.Content
      style={{
        marginTop: "2rem",
        marginLeft: "1rem",
      }}
    >
      <AnimeRelations data={data?.relations.edges || []} />
      <AnimeCharactersPreview data={data?.characterPreview.edges || []} />
      <AnimeStaffPreview data={data?.staffPreview.edges.slice(0, 4) || []} />
    </Layout.Content>
  );
};
