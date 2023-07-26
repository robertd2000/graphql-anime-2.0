import { Col, Pagination, Row } from "antd";
import { FC } from "react";
import { Media } from "~shared/types";
import { Card } from "~shared/ui/card";
import { Spinner } from "~shared/ui/spinner";

interface AnimeListProps {
  data: Media[];
  loading: boolean;
  totalPages: number;
  currentPage: number;
  onChangePage: (page: number) => void;
}

export const AnimeList: FC<AnimeListProps> = ({
  data,
  loading,
  currentPage,
  totalPages,
  onChangePage,
}) => {
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
          <Card data={title} key={title.id} />
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
