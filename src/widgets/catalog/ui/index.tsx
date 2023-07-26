import { FC } from "react";
import { Col, Pagination, Row } from "antd";
import { useCatalogData } from "../model";
import { Card, Spinner } from "~shared/ui";
import { Media } from "~shared/types";

export const Catalog: FC = () => {
  const { currentPage, onChangePage, data, loading, totalPages } =
    useCatalogData();

  return (
    <div>
      {loading ? (
        <Spinner isLoading={loading} />
      ) : (
        <>
          <Row
            gutter={[16, 32]}
            align={"middle"}
            justify="start"
            // justify="space-evenly"
            style={{
              marginTop: "2rem",
            }}
          >
            {data?.map((title) => (
              <Card data={title as Media} key={title.id} />
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
      )}
    </div>
  );
};
