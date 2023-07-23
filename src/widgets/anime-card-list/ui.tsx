import { Col, Pagination, Row } from "antd";
import { Medum } from "~entities/home/types";
import { useSearchAnime } from "~features/anime-search/model/hooks/useSearchAnime";
import { Card } from "~shared/ui/card";
import { Spinner } from "~shared/ui/spinner";

export const AnimeCardList = () => {
  const { currentPage, onChangePage, data, loading, totalPages } =
    useSearchAnime();

  return loading ? (
    <Spinner isLoading={loading} />
  ) : (
    <>
      <Row
        gutter={[16, 32]}
        align={"middle"}
        justify="space-evenly"
        style={{
          marginTop: "2rem",
        }}
      >
        {data?.map((title) => (
          <Card data={title as Medum} key={title.id} />
        ))}

        <Col span={24}>
          {totalPages! > 1 && data && (
            <Pagination
              current={currentPage}
              onChange={onChangePage}
              total={totalPages}
              showSizeChanger={false}
              style={{
                margin: "1rem",
              }}
            />
          )}
        </Col>
      </Row>
    </>
  );
};
