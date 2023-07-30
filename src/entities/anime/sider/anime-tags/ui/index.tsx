import { Col, Row, Tooltip, Typography } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Tag } from "~shared/types/anime";

interface AnimeTagsProps {
  tags: Tag[];
}

export const AnimeTags: FC<AnimeTagsProps> = ({ tags }) => {
  return tags.length ? (
    <>
      <Typography.Title level={5}>Tags</Typography.Title>
      {tags.map((tag) => (
        <Link
          to={`/search-anime/?genres=${tag.name}`}
          style={{
            color: "rgb(92, 114, 138)",
          }}
        >
          <Tooltip title={tag.description}>
            <Row
              key={tag.id}
              justify="space-between"
              style={{
                backgroundColor: "white",
                margin: "10px 0px",
                padding: "5px 25px",
              }}
            >
              <Col>{tag.name}</Col>

              <Col>{tag.rank}%</Col>
            </Row>
          </Tooltip>
        </Link>
      ))}
    </>
  ) : null;
};
