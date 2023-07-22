import { Col, Pagination, Row } from "antd";
import { useAnimeList } from "~entities/anime-card-list";
import { Card } from "~shared/ui/card";
import { Spinner } from "~shared/ui/spinner";

export const AnimeCardList = () => {
  const { currentPage, onChangePage, data, loading, totalPages } =
    useAnimeList();

  return loading ? (
    <Spinner isLoading={loading} />
  ) : (
    <Row gutter={[16, 32]} align={"middle"} justify="space-evenly">
      {data?.map((title) => (
        <Card data={title} key={title.id} />
      ))}

      <Col>
        <Pagination
          current={currentPage}
          onChange={onChangePage}
          total={totalPages}
          showSizeChanger={false}
          style={{
            margin: "1rem",
          }}
        />
      </Col>
    </Row>
  );
};
