import { Col, Pagination, Row } from "antd";
import { useHomeAnimeList } from "~entities/home/hooks/useHomeAnimeList";
import { Spinner } from "~shared/ui/spinner";
import { Card } from "~widgets/card";

export const HomePage = () => {
  const { currentPage, onChangePage, data, loading, totalPages } =
    useHomeAnimeList();

  return loading ? (
    <Spinner isLoading={loading} />
  ) : (
    <Row
      gutter={[16, 32]}
      align={"middle"}
      justify="space-evenly"
      style={{
        margin: "2rem 10rem",
      }}
    >
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
            margin: "1.5rem",
          }}
        />
      </Col>
    </Row>
  );
};
