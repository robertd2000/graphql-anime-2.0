import { FC } from "react";
import { Col, Row } from "antd";
import { Ranking } from "~shared/types/anime";
import { HeartFilled, StarFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

interface RankingsProps {
  rankings: Ranking[];
}

export const AnimeRankings: FC<RankingsProps> = ({ rankings }) => {
  return (
    <div>
      {rankings.map((ranking) => (
        <Link
          to={`/search-anime?sort=${
            ranking.type === "RATED" ? "SCORE_DESC" : "POPULARITY_DESC"
          }&format=TV`}
          style={{
            color: "rgb(92, 114, 138)",
          }}
        >
          <Row
            key={ranking.id}
            style={{
              backgroundColor: "white",
              margin: "10px 0px",
              padding: "5px 25px",
            }}
          >
            <Col span={4}>
              {ranking.type === "RATED" ? (
                <StarFilled
                  style={{
                    color: "rgb(247, 191, 99)",
                  }}
                />
              ) : (
                <HeartFilled
                  style={{
                    color: "rgb(232, 93, 117)",
                  }}
                />
              )}
            </Col>

            <Col span={20}>
              #{ranking.rank} {ranking.context}
            </Col>
          </Row>
        </Link>
      ))}
    </div>
  );
};
