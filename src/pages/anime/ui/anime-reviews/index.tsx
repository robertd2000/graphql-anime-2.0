import { Row } from "antd";
import { Review } from "~entities/review";
import { useAnimeReviews } from "~pages/anime/model/hooks/useAnimeReviews";
import { Spinner } from "~shared/ui";

export const AnimeReviews = () => {
  const { data, loading } = useAnimeReviews();

  return loading ? (
    <Spinner isLoading={loading} />
  ) : (
    <Row
      gutter={16}
      style={{
        margin: "1rem",
      }}
    >
      {data?.map((review) => (
        <Review review={review} />
      ))}
    </Row>
  );
};
