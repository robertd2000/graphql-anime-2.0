import { Col, Pagination, Row } from "antd";
import { useHomeAnimeList } from "~entities/anime-card-list";
import { Spinner } from "~shared/ui/spinner";
import { Card } from "~widgets/card";

export const AnimeCardList = () => {
  const { currentPage, onChangePage, data, loading, totalPages } =
    useHomeAnimeList();

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
